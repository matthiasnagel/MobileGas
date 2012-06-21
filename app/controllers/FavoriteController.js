// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileGas
// Controller: FavoriteController
// ==========================================================================

MobileGas.FavoriteController = M.Controller.extend({

    /* sample controller property */
    favorites: null,

    init: function(isFirstLoad) {
        this.set('favorites', MobileGas.Station.find());
    },

    edit: function() {
        M.ViewManager.getView('favoritesView', 'stationList').toggleRemove({
            target: this,
            action: 'removeStation'
        });
    },

    removeStation: function(domId, modelId) {

        var that = this;
        M.DialogView.confirm({
            title: 'Tankstelle löschen',
            message: 'Möchtest Du diese Tankstelle wirklich aus den Favoriten löschen?',
            confirmButtonValue: 'Ja',
            cancelButtonValue: 'Nein',
            callbacks: {
                confirm: {
                    action: function() {
                        var record = MobileGas.Station.recordManager.getRecordById(modelId);
                        record.del();
                        that.set('favorites', MobileGas.Station.records());
                    }
                },
                cancel: {
                    action: function(){
                        
                    }
                }
            }
        });

    },

    favoriteItemClicked: function(domId, modelId) {
        var station = MobileGas.Station.recordManager.getRecordById(modelId);

        MobileGas.MapController.set('station', station);

        MobileGas.RequestController.getStationFuels(station.record.id);
    }

});

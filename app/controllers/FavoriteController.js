// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileTank
// Controller: FavoriteController
// ==========================================================================

MobileTank.FavoriteController = M.Controller.extend({

    /* sample controller property */
    favorites: null,

    init: function(isFirstLoad) {
        this.set('favorites', MobileTank.Station.find());
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
                        var record = MobileTank.Station.recordManager.getRecordById(modelId);
                        record.del();
                        that.set('favorites', MobileTank.Station.records());
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
        var station = MobileTank.Station.recordManager.getRecordById(modelId);

        MobileTank.MapController.set('station', station);

        MobileTank.RequestController.getStationFuels(station.record.id);
    }

});

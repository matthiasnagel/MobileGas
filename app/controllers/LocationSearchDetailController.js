// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileFuel
// Controller: LocationSearchDetailController
// ==========================================================================

MobileFuel.LocationSearchDetailController = M.Controller.extend({

    /* sample controller property */
    headerName: '',

    fuelsList: null,
    stationId: '',

    /*
     * Sample function
     * To handle the first load of a page.
     */
    init: function(isFirstLoad) {
        if (isFirstLoad) {
            this.set('favorites', MobileFuel.Station.records());
        }
        var fav = M.ViewManager.getView('locationSearchDetailView', 'favButton');
        $("#" + fav.id + "").show();

        if (this.stationId) {
            var that = this;
            $.each(MobileFuel.Station.find(), function(key, val) {
                console.log(that.stationId + '' + val.record.id);
                if (that.stationId === val.record.id) {
                    console.log(that.stationId + '' + val.record.id);
                    $("#" + fav.id + "").hide();
                }
            });
        }

    },

    parseXML: function(xml) {
        xmlDoc = $.parseXML(xml);
        $xml = $(xmlDoc);

        var fuels = [];
        var that = this;

        $xml.find('fuel').each(function() {

            var id = $(this).attr('type');
            var currency = $(this).attr('currency');
            var price_current = $(this).attr('price_current');
            var update = $(this).attr('update');

            name = 'Tankstelle';
            $.getJSON('fuels.json',
                function(data) {
                    $.each(data, function(key, val) {
                        if (val.id.toString() == id.toString()) {
                            fuels.push(MobileFuel.Fuel.createRecord({
                                type: val.title.toString(),
                                currency: currency,
                                price_current: price_current,
                                update:update,
                                id: id
                            }))
                        }
                    });
                }).success(function() {
                    console.log('fuels initialized done');
                    that.set('fuelsList', fuels);
                });
        });

        MobileFuel.LocationSearchDetailController.switchToLocationSearchDetailView();
    },

    switchToLocationSearchDetailView: function() {

        var name = 'Detail';
        var that = this;

        if (MobileFuel.MapController.station) {
            var id = MobileFuel.MapController.station.record.brand;
            $.getJSON('brands.json',
                function(data) {
                    $.each(data, function(key, val) {
                        if (val.id.toString() == id.toString()) {
                            that.set('headerName', val.title.toString());
                        }
                    });
                }).success(function() {
                    that.switchToPage('locationSearchDetailView');
                });
        }
    },

    setFavorit: function() {
        if (MobileFuel.MapController.station) {
            MobileFuel.MapController.station.save();
        }
    }
});

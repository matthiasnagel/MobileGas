// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileGas
// Controller: ListItemController
// ==========================================================================

MobileGas.ListItemController = M.Controller.extend({


    searchMaskItemClicked: function(id) {

        var listItem = M.ViewManager.getViewById(id);

        switch (listItem.modelId) {
            case "0":
                this.switchToPage('searchBrandView');
                break;
            case "1":
                this.switchToPage('searchFuelView');
                break;
            case "2":
                this.switchToPage('searchRadiusView');
                break;
            case "3":
                this.switchToPage('searchModeView');
                break;
            case "4":
                this.switchToPage('searchDisplayModeView');
                break;
            default:
                //DO NOTHING
                break;
        }
    },

    resultStationClicked:function(dom_id, station_id) {
        _.each(MobileGas.SearchController.results, function(station) {
            if (station_id == station.m_id) {

                MobileGas.RequestController.getStationFuels(station.record.id);

                MobileGas.LocationSearchDetailController.set('fuelsList', station.record.fuel);
                MobileGas.LocationSearchDetailController.set('stationId', station.record.id);
                MobileGas.MapController.set('station', station);
                
                var id = station.record.brand;
                    $.getJSON('brands.json',
                        function(data) {
                            $.each(data, function(key, val) {
                                if (val.id.toString() == id.toString()) {
                                    MobileGas.LocationSearchDetailController.set('headerName', val.title.toString());
                                }
                            });
                        }).success(function() {
                            MobileGas.NavigationController.switchToLocationSearchDetailView();
                        });
            }

        })
    }

});

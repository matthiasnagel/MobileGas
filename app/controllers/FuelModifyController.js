// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileGas
// Controller: FuelModifyController
// ==========================================================================

MobileGas.FuelModifyController = M.Controller.extend({

    /* sample controller property */
    myControllerProperty: '',

    fuelId: '',
    fuelPrice: '',
    fuelString: '',

    /*
    * Sample function
    * To handle the first load of a page.
    */
    init: function(isFirstLoad) {
        if(isFirstLoad) {
            /* do something here, when page is loaded the first time. */
        }
        /* do something, for any other load. */
    },

    /*
    * Example function, which shows how to switch to another page
    * Function is triggered by setting target & action in a view.
    */
    fuelItemClicked: function(dom_id, fuel_id) {

        var that = this;

        _.each(MobileGas.LocationSearchDetailController.fuelsList, function(fuel) {
            if (fuel_id == fuel.m_id) {

                that.set('fuelId', fuel.record.id);
                that.set('fuelPrice', fuel.record.price_current);
                that.set('fuelString', fuel.record.type);
                
                MobileGas.NavigationController.switchToFuelModifyView();
            }

        })
    },

    save: function(){
        MobileGas.RequestController.saveNewPrice(this.fuelId, MobileGas.LocationSearchDetailController.stationId, this.fuelPrice);
    }

});

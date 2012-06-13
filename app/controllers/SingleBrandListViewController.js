// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileFuel
// Controller: SingleBrandListViewController
// ==========================================================================

MobileFuel.SingleBrandListViewController = M.Controller.extend({

    /* sample controller property */
    gasBrands: '',

    /*
    * Sample function
    * To handle the first load of a page.
    */
    init: function(isFirstLoad) {
        if(isFirstLoad) {
            var brandarray = [];
            var tmpBrand;
            var that = this;
            $.getJSON('brands.json',
                function(data) {
                    _.each(data, function(brand) {
                        if(brand.id != 0){//'ALLE' SOLL NICHT ANGEZEIGT WERDEN
                            tmpBrand = {value:brand.id,label:brand.title};
                            brandarray.push(tmpBrand);
                        }
                    })
                }).success(function() {
                    console.log('singlebrands initialized done');
                    that.set('gasBrands', brandarray);
                });
        }
        /* do something, for any other load. */
    },

    /*
    * Example function, which shows how to switch to another page
    * Function is triggered by setting target & action in a view.
    */
    brandChosen: function(itemValues, item) {
        MobileFuel.NavigationController.backToReportingPage(item);
    }

});

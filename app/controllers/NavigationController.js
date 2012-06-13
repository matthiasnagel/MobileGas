// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileTank
// Controller: NavigationController
// ==========================================================================

MobileTank.NavigationController = M.Controller.extend({

    /* sample controller property */
    myControllerProperty: '',

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
    backToReportingPage: function(item) {
        /* switch to a page called 'examplePage' */
        var label = M.ViewManager.getView('reportingPage','label');
        MobileTank.ReportStationViewController.set('brand',item);
        history.back(-1);

    },

    switchToModeView:function() {
        this.switchToPage('searchModeView');
    },

    switchToReportingPage:function(){
        this.switchToPage('reportingPage');
    },

    switchToSingleBrandPage:function(){
        this.switchToPage('singleBrandPage');
    },

    switchToResultsView:function(){
        this.switchToPage('resultsPage');
    },

    switchToLocationSearchDetailView:function(){
        this.switchToPage('locationSearchDetailView');
    },

    switchToFuelModifyView:function(){
        this.switchToPage('fuelModifyView');
    }


});

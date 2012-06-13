// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileFuel
// Controller: DisplayModeViewController
// ==========================================================================

MobileFuel.DisplayModeViewController = M.Controller.extend({

    /* sample controller property */


    /*
     * Sample function
     * To handle the first load of a page.
     */
    init: function(isFirstLoad) {
        if (isFirstLoad) {
            /* do something here, when page is loaded the first time. */
        }
        /* do something, for any other load. */
    },

    /*
     * Example function, which shows how to switch to another page
     * Function is triggered by setting target & action in a view.
     */
    getSelection: function() {
        var selectionList = M.ViewManager.getView('searchDisplayModeView', 'selectionlist');

        return selectionList.getSelection(YES) ? selectionList.getSelection(YES).value : -1;
    },

    displayModeChosen:function(itemValues, items) {

        var selectionList = M.ViewManager.getView('searchDisplayModeView', 'selectionlist');
        MobileFuel.SearchController.anzeige.chosen = selectionList.getSelection(YES).label;
        MobileFuel.SearchController.setSearchCriteria();

    }

});

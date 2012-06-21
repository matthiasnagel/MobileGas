// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileGas
// Controller: RadiusViewController
// ==========================================================================

MobileGas.RadiusViewController = M.Controller.extend({

    

    /*
    * Sample function
    * To handle the first load of a page.
    */
    init: function(isFirstLoad) {

    },

    radiusChosen:function(itemValues, items) {
        var selectionList = M.ViewManager.getView('searchRadiusView', 'selectionlist');
        MobileGas.SearchController.suchradius.chosen = selectionList.getSelection(YES).label;
        MobileGas.SearchController.setSearchCriteria();
    },

    /*
    * Example function, which shows how to switch to another page
    * Function is triggered by setting target & action in a view.
    */
    getSelection: function() {
        var selectionList = M.ViewManager.getView('searchRadiusView','selectionlist');

        return selectionList.getSelection(YES) ? selectionList.getSelection(YES).value :-1;
    }

});

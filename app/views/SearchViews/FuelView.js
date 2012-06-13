// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileTank
// View: FuelView
// ==========================================================================

m_require('app/views/TabBar.js');

MobileTank.FuelView = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: MobileTank.FuelViewController,
            action: 'init'
        }
    },

    cssClass: 'FuelView',

    childViews: 'header content tabBar',

    header: M.ToolbarView.design({
        value: 'Spritarten',
        anchorLocation: M.TOP,
        showBackButton: YES
    }),

    content: M.ScrollView.design({
        childViews: 'fuelSelection',
        fuelSelection: M.SelectionListView.design({
            selectionMode: M.MULTIPLE_SELECTION,

            contentBinding:{
                target: MobileTank.FuelViewController,
                property: 'fuels'
            },

            events:{
                change:{
                    target:MobileTank.FuelViewController,
                    action:'fuelChosen'
                }
            }

        })
    }),

    tabBar: MobileTank.TabBar

});


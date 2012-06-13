// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileFuel
// View: FuelView
// ==========================================================================

m_require('app/views/TabBar.js');

MobileFuel.FuelView = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: MobileFuel.FuelViewController,
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
                target: MobileFuel.FuelViewController,
                property: 'fuels'
            },

            events:{
                change:{
                    target:MobileFuel.FuelViewController,
                    action:'fuelChosen'
                }
            }

        })
    }),

    tabBar: MobileFuel.TabBar

});


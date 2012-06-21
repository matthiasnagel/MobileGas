// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileGas
// View: FuelView
// ==========================================================================

m_require('app/views/TabBar.js');

MobileGas.FuelView = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: MobileGas.FuelViewController,
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
                target: MobileGas.FuelViewController,
                property: 'fuels'
            },

            events:{
                change:{
                    target:MobileGas.FuelViewController,
                    action:'fuelChosen'
                }
            }

        })
    }),

    tabBar: MobileGas.TabBar

});


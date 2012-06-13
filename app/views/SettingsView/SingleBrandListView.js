// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileFuel
// View: SingleBrandListView
// ==========================================================================

m_require('app/views/TabBar.js');

MobileFuel.SingleBrandListView = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: MobileFuel.SingleBrandListViewController,
            action: 'init'
        }
    },

    cssClass: 'SingleBrandListView',

    childViews: 'header content tabBar',

    header: M.ToolbarView.design({
        value: 'Marke wählen',
        anchorLocation: M.TOP
    }),

    content: M.ScrollView.design({
        childViews: 'list',
        list: M.SelectionListView.design({
            selectionMode: M.SINGLE_SELECTION,

            contentBinding:{
                target: MobileFuel.SingleBrandListViewController,
                property: 'gasBrands'
            },

            events:{
                change:{
                    target:MobileFuel.SingleBrandListViewController,
                    action:'brandChosen'
                }
            }
        })
    }),

    tabBar: MobileFuel.TabBar
});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileGas
// View: BrandView
// ==========================================================================

m_require('app/views/TabBar.js');

MobileGas.BrandView = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: MobileGas.BrandViewController,
            action: 'init'
        }
    },
    
    cssClass: 'BrandView',

    childViews: 'header content tabBar',

    header: M.ToolbarView.design({
        value: 'Marken wählen',
        anchorLocation: M.TOP,
        showBackButton: YES
    }),

    content: M.ScrollView.design({
        childViews: 'brandSelection',
        brandSelection: M.SelectionListView.design({
            selectionMode: M.MULTIPLE_SELECTION,

            contentBinding:{
                target: MobileGas.BrandViewController,
                property: 'gasBrands'
            },

            events:{
                change:{
                    target:MobileGas.BrandViewController,
                    action:'brandChosen'
                }
            }
        })
    }),

    tabBar: MobileGas.TabBar

});


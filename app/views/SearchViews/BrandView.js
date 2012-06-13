// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileTank
// View: BrandView
// ==========================================================================

m_require('app/views/TabBar.js');

MobileTank.BrandView = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: MobileTank.BrandViewController,
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
                target: MobileTank.BrandViewController,
                property: 'gasBrands'
            },

            events:{
                change:{
                    target:MobileTank.BrandViewController,
                    action:'brandChosen'
                }
            }
        })
    }),

    tabBar: MobileTank.TabBar

});


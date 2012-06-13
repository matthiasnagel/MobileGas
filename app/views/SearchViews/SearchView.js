// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileTank
// View: SearchViews
// ==========================================================================
m_require('app/views/TabBar.js');
m_require('app/views/SearchViews/SearchMaskListViewTemplate.js');

MobileTank.SearchView = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: MobileTank.SearchController,
            action: 'init'
        }
    },

    cssClass: 'SearchView',

    childViews: 'header content tabBar',

    header: M.ToolbarView.design({
        value: 'Spritpreise suchen',
        anchorLocation: M.TOP
    }),

    content: M.ScrollView.design({
        childViews: 'listSearch searchButton',

        cssClass:'searchView',

        listSearch: M.ListView.design({
            listItemTemplateView:MobileTank.SearchMaskListViewTemplate,
            contentBinding: {
                target: MobileTank.SearchController,
                property: 'searchCriteria'
            }

        }),

        searchButton: M.ButtonView.design({
            value:'Suchen',
            events:{
                tap:{
                    target: MobileTank.SearchController,
                    action: 'aggregateSearchInformation'
                }
            }
        })


    }),

    tabBar: MobileTank.TabBar

});


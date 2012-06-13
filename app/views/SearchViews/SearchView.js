// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileFuel
// View: SearchViews
// ==========================================================================
m_require('app/views/TabBar.js');
m_require('app/views/SearchViews/SearchMaskListViewTemplate.js');

MobileFuel.SearchView = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: MobileFuel.SearchController,
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
            listItemTemplateView:MobileFuel.SearchMaskListViewTemplate,
            contentBinding: {
                target: MobileFuel.SearchController,
                property: 'searchCriteria'
            }

        }),

        searchButton: M.ButtonView.design({
            value:'Suchen',
            events:{
                tap:{
                    target: MobileFuel.SearchController,
                    action: 'aggregateSearchInformation'
                }
            }
        })


    }),

    tabBar: MobileFuel.TabBar

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileTank
// View: SearchResultsView
// ==========================================================================
m_require('app/views/SearchViews/SearchResultsListItemTemplate.js');

MobileTank.SearchResultsView = M.PageView.design({

    
    cssClass: 'SearchResultsView',

    childViews: 'header content tabBar',

    header: M.ToolbarView.design({
        value: 'Suchergebnisse',
        anchorLocation: M.TOP,
        showBackButton:YES
    }),

    content: M.ScrollView.design({
        childViews: 'resultList',
        resultList: M.ListView.design({
            listItemTemplateView:MobileTank.SearchResultsListItemTemplate,
            contentBinding: {
                target: MobileTank.SearchController,
                property: 'results'
            }
        })
    }),

    tabBar : MobileTank.TabBar

});


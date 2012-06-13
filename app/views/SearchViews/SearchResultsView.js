// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileFuel
// View: SearchResultsView
// ==========================================================================
m_require('app/views/SearchViews/SearchResultsListItemTemplate.js');

MobileFuel.SearchResultsView = M.PageView.design({

    
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
            listItemTemplateView:MobileFuel.SearchResultsListItemTemplate,
            contentBinding: {
                target: MobileFuel.SearchController,
                property: 'results'
            }
        })
    }),

    tabBar : MobileFuel.TabBar

});


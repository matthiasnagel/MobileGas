// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileGas
// View: SearchResultsView
// ==========================================================================
m_require('app/views/SearchViews/SearchResultsListItemTemplate.js');

MobileGas.SearchResultsView = M.PageView.design({

    
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
            listItemTemplateView:MobileGas.SearchResultsListItemTemplate,
            contentBinding: {
                target: MobileGas.SearchController,
                property: 'results'
            }
        })
    }),

    tabBar : MobileGas.TabBar

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileTank
// View: HomeScreen
// ==========================================================================

MobileTank.TabBar = M.TabBarView.design({

    childViews: 'tab1 tab12 tab2 tab3',

    anchorLocation: M.BOTTOM,

    tab1: M.TabBarItemView.design({

        value: 'Suche',
        page: 'searchView'

    }),

    tab12: M.TabBarItemView.design({

        value: 'Umkreissuche',
        page: 'locationSearchView'

    }),

    tab2: M.TabBarItemView.design({

        value: 'Favoriten',
        page: 'favoritesView'

    }),

    tab3: M.TabBarItemView.design({

        value: 'Einstellungen',
        page: 'optionsView'

    })

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileGas
// View: HomeScreen
// ==========================================================================

MobileGas.TabBar = M.TabBarView.design({

    childViews: 'tab1 tab12 tab2 tab3',

    anchorLocation: M.BOTTOM,

    tab1: M.TabBarItemView.design({

        value: 'Suche',
        icon: 'search',
        page: 'searchView'

    }),

    tab12: M.TabBarItemView.design({

        value: 'Umkreissuche',
        icon: 'location',
        page: 'locationSearchView'

    }),

    tab2: M.TabBarItemView.design({

        value: 'Favoriten',
        icon: 'favorit',
        page: 'favoritesView'

    }),

    tab3: M.TabBarItemView.design({

        value: 'Einstellungen',
        icon: 'settings',
        page: 'optionsView'

    })

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileFuel
// View: FavoritesView
// ==========================================================================
m_require('app/views/TabBar.js');
m_require('app/views/FavoritesView/FavoritesListViewTemplate.js');

MobileFuel.FavoritesView = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: MobileFuel.FavoriteController,
            action: 'init'
        }
    },

    cssClass: 'FavoritesView',

    childViews: 'header content tabBar',

    header: M.ToolbarView.design({
        anchorLocation: M.TOP,
        childViews: 'centerLabel toggleView',

        toggleView: M.ToggleView.design({
            childViews: 'button1 button2',

            anchorLocation: M.RIGHT,

            toggleOnClick: YES,

            button1: M.ButtonView.design({
                value: 'Bearbeiten',
                icon: 'gear',
                events: {
                    tap: {
                        target: MobileFuel.FavoriteController,
                        action: 'edit'
                    }
                }
            }),

            button2: M.ButtonView.design({
                value: 'Fertig',
                icon: 'check',
                events: {
                    tap: {
                        target: MobileFuel.FavoriteController,
                        action: 'edit'
                    }
                }
            })
        }),

        centerLabel: M.LabelView.design({
            value: 'Favoriten',
            anchorLocation: M.CENTER
        })
    }),

    content: M.ScrollView.design({
        childViews: 'stationList',
        stationList: M.ListView.design({
            listItemTemplateView:MobileFuel.FavoritesListViewTemplate,
            contentBinding: {
                target: MobileFuel.FavoriteController,
                property: 'favorites'
            }

        })
    }),

    tabBar: MobileFuel.TabBar

});


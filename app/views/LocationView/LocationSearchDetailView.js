// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileFuel
// View: LocationSearchDetailView
// ==========================================================================
m_require('app/views/TabBar.js');
m_require('app/views/LocationView/LocationSearchDetailListViewTemplate.js');


MobileFuel.LocationSearchDetailView = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: MobileFuel.LocationSearchDetailController,
            action: 'init'
        }
    },

    cssClass: 'LocationSearchDetailView',

    childViews: 'header content tabBar',

    header: M.ToolbarView.design({
        childViews:'backButton label favButton',
        anchorLocation: M.TOP,

        favButton: M.ButtonView.design({
            value: 'Favorit',
            icon: 'star',
            anchorLocation: M.RIGHT,
            events: {
                tap: {
                    action: function() {
                        MobileFuel.LocationSearchDetailController.setFavorit();
                    }
                }
            }
        }),

        backButton: M.ButtonView.design({
            value: 'Back',
            icon: 'arrow-l',
            anchorLocation: M.LEFT,
            internalEvents: {
                tap: {
                    action: function() {
                        history.back(-1);
                    }
                }
            }
        }),

        label: M.LabelView.design({
            anchorLocation: M.CENTER,
            contentBinding: {
                target: MobileFuel.LocationSearchDetailController,
                property: 'headerName'
            },
            value: 'Toolbar'
        })
    }),


    content: M.ScrollView.design({
        childViews: 'stationList',
        stationList: M.ListView.design({
            listItemTemplateView:MobileFuel.LocationSearchDetailListViewTemplate,
            contentBinding: {
                target: MobileFuel.LocationSearchDetailController,
                property: 'fuelsList'
            }

        })
    }),

    tabBar : MobileFuel.TabBar

})
    ;


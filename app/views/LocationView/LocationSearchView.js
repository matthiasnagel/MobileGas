// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileTank
// View: LocationSearchView
// ==========================================================================
m_require('app/views/TabBar.js');
m_require('app/views/SearchViews/SearchMaskListViewTemplate.js');

MobileTank.LocationSearchView = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: MobileTank.MapController,
            action: 'init'
        }
    },

    cssClass: 'LocationSearchView',

    childViews: 'header content tabBar',

    header: M.ToolbarView.design({
        value: 'Umkreissuche',
        anchorLocation: M.TOP
    }),

    content: M.ScrollView.design({
        childViews: 'map',

        map: M.MapView.design({

            cssClass: 'map',

            isInset: YES,

            showMapTypeControl: NO,

            showStreetViewControl: NO,

            showNavigationControl: YES,

            mapType: M.MAP_ROADMAP,

            zoomLevel: 13,

            isDraggable: YES,

            markerAnimationType: M.MAP_MARKER_ANIMATION_DROP,

            contentBinding: {
                target: MobileTank.MapController,
                property: 'markers'
            },

            events: {
                tap: {
                    target: MobileTank.MapController,
                    action: 'markerClicked'
                }
            }

        })
    }),

    tabBar: MobileTank.TabBar

});


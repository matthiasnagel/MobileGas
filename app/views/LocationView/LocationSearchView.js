// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileGas
// View: LocationSearchView
// ==========================================================================
m_require('app/views/TabBar.js');
m_require('app/views/SearchViews/SearchMaskListViewTemplate.js');

MobileGas.LocationSearchView = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: MobileGas.MapController,
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
                target: MobileGas.MapController,
                property: 'markers'
            },

            events: {
                tap: {
                    target: MobileGas.MapController,
                    action: 'markerClicked'
                }
            }

        })
    }),

    tabBar: MobileGas.TabBar

});


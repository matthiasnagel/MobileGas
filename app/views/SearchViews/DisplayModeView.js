// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileFuel
// View: DisplayModeView
// ==========================================================================

m_require('app/views/TabBar.js');

MobileFuel.DisplayModeView = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: MobileFuel.DisplayModeViewController,
            action: 'init'
        }
    },
    
    cssClass: 'DisplayModeView',

    childViews: 'header content tabBar',

    header: M.ToolbarView.design({
        value: 'Anzeige',
        anchorLocation: M.TOP,
        showBackButton: YES
    }),

    content: M.ScrollView.design({
        childViews: 'selectionlist',
        selectionlist: M.SelectionListView.design({
            childViews:'item1 item2',
            selectionMode:M.SINGLE_SELECTION,

            events:{
                change:{
                    target:MobileFuel.DisplayModeViewController,
                    action:'displayModeChosen'
                }
            },

            item1:M.SelectionListItemView.design({
                label:'Alle',
                value:'0',
                isSelected:YES
            }),
            item2:M.SelectionListItemView.design({
                label:'Nur mit Preis',
                value:'1'
            })
        })
    }),

    tabBar: MobileFuel.TabBar

});


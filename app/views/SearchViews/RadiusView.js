// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileGas
// View: SearchRadiusView
// ==========================================================================

m_require('app/views/TabBar.js');

MobileGas.RadiusView = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: MobileGas.RadiusViewController,
            action: 'init'
        }
    },

    cssClass: 'SearchRadiusView',

    childViews: 'header content tabBar',

    header: M.ToolbarView.design({
        value: 'Suchradius wählen',
        anchorLocation: M.TOP,
        showBackButton: YES
    }),

    content: M.ScrollView.design({
        childViews: 'selectionlist',


        selectionlist: M.SelectionListView.design({
            childViews:'item1 item2 item3 item4 item5',
            selectionMode:M.SINGLE_SELECTION,

            events:{
                change:{
                    target:MobileGas.RadiusViewController,
                    action:'radiusChosen'
                }
            },

            item1:M.SelectionListItemView.design({
                value:'5',
                label:' 5 km',
                isSelected:YES
            }),
            item2:M.SelectionListItemView.design({
                value:'10',
                label:'10 km'
            }),
            item3:M.SelectionListItemView.design({
                value:'15',
                label:'15 km'
            }),
            item4:M.SelectionListItemView.design({
                value:'20',
                label:'20 km'
            }),
            item5:M.SelectionListItemView.design({
                value:'25',
                label:'25 km'
            })
        })
    }),
    
    tabBar: MobileGas.TabBar

});


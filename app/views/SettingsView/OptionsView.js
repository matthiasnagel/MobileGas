// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileFuel
// View: OptionsView
// ==========================================================================
m_require('app/views/TabBar.js');
MobileFuel.OptionsView = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: MobileFuel.MyController,
            action: 'init'
        }
    },
    
    cssClass: 'OptionsView',

    childViews: 'header content tabBar',

    header: M.ToolbarView.design({
        value: 'Optionen',
        anchorLocation: M.TOP
    }),

    content: M.ScrollView.design({
        childViews: 'button',
        button: M.ButtonView.design({
            value: 'Tankstelle melden',
            events:{
                tap:{
                    target: MobileFuel.NavigationController,
                    action: 'switchToReportingPage'
                }
            }
        })
    }),

    tabBar: MobileFuel.TabBar

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileFuel
// View: SearchModeView
// ==========================================================================

m_require('app/views/TabBar.js');

MobileFuel.ModeView = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: MobileFuel.ModeViewController,
            action: 'init'
        }
    },
    
    cssClass: 'SearchModeView',

    childViews: 'header content tabBar',



    header: M.ToolbarView.design({
        childViews:'backButton label',
        anchorLocation: M.TOP,
        backButton: M.ButtonView.design({
            value: 'Back',
            icon: 'arrow-l',
            anchorLocation: M.LEFT,
            internalEvents: {
                tap: {
                    action: function() {
                        MobileFuel.ModeViewController.goBackToSearchView();
                    }
                }
            }
        }),

        label: M.LabelView.design({
            anchorLocation: M.CENTER,
            value: 'Suchmodus wählen'
        })


    }),

    content: M.ScrollView.design({
        childViews: 'label button label2 textfield button2',
        label: M.LabelView.design({
            value: 'Verfügbare Tankstellen suchen:'
        }),

        button:M.ButtonView.design({
            value:'in der aktuellen Umgebung',
            events:{
                tap:{
                    target:MobileFuel.ModeViewController,
                    action:'currentLocation'
                }
            }
        }),

        label2: M.LabelView.design({
            value:'oder (nur innerhalb Deutschlands)'
        }),

        textfield:M.TextFieldView.design({
            label: 'PLZ: ',
            contentBindingReverse:{
                target:MobileFuel.ModeViewController,
                property:'plzValue'
            }
        }),

        button2:M.ButtonView.design({
            value:'Ok',
            events:{
                tap:{
                    target:MobileFuel.ModeViewController,
                    action:'viaPlz'
                }
            }
        })

    }),

    tabBar: MobileFuel.TabBar

});


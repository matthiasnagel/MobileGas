// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileTank
// View: FuelModifyView
// ==========================================================================
m_require('app/views/TabBar.js');

MobileTank.FuelModifyView = M.PageView.design({

    events: {
        pageshow: {
            target: MobileTank.FuelModifyController,
            action: 'init'
        }
    },

    cssClass: 'FuelModifyView',

    childViews: 'header content tabBar',

    header: M.ToolbarView.design({
        childViews:'backButton label favButton',
        anchorLocation: M.TOP,

        favButton: M.ButtonView.design({
            value: 'Speichern',
            anchorLocation: M.RIGHT,
            events: {
                tap: {
                    action: function() {
                        MobileTank.FuelModifyController.save();
                    }
                }
            }
        }),

        backButton: M.ButtonView.design({
            value: 'Abbrechen',
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
            value: 'Preis ändern'
        })
    }),

    content: M.ScrollView.design({
        childViews: 'label1 label2 textfield',
        label1: M.LabelView.design({
            value: 'Hier kannst du den Preis für folgende Spritart ändern:'
        }),
        label2: M.LabelView.design({
            contentBinding: {
                target: MobileTank.FuelModifyController,
                property: 'fuelString'
            },
            value: 'Sprit'
        }),
        textfield: M.TextFieldView.design({
            contentBinding: {
                target: MobileTank.FuelModifyController,
                property: 'fuelPrice'
            },
            contentBindingReverse:{
                target:MobileTank.FuelModifyController,
                property:'fuelPrice'
            },
            initialText: 'Aktueller Preis'
        })
    }),

    tabBar: MobileTank.TabBar

});


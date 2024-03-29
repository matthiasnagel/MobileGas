// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileGas
// View: FuelModifyView
// ==========================================================================
m_require('app/views/TabBar.js');

MobileGas.FuelModifyView = M.PageView.design({

    events: {
        pageshow: {
            target: MobileGas.FuelModifyController,
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
                        MobileGas.FuelModifyController.save();
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
        childViews: 'label1 label2 label3 textfield',
        label1: M.LabelView.design({
            value: 'Preis für ',
            cssClass:'fuelModifyText1'
        }),
        label2: M.LabelView.design({
            contentBinding: {
                target: MobileGas.FuelModifyController,
                property: 'fuelString'
            },
            value: 'Sprit',
            cssClass:'fuelModifyType'
        }),
        label3: M.LabelView.design({
            value: ' ändern:',
            cssClass:'fuelModifyText2'
        }),
        textfield: M.TextFieldView.design({
            contentBinding: {
                target: MobileGas.FuelModifyController,
                property: 'fuelPrice'
            },
            contentBindingReverse:{
                target:MobileGas.FuelModifyController,
                property:'fuelPrice'
            },
            initialText: 'Aktueller Preis',
            cssClass:'fuelModifyInput'
        })
    }),

    tabBar: MobileGas.TabBar

});


// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileGas
// View: addStation
// ==========================================================================
m_require('app/views/TabBar.js');
MobileGas.ReportStationView = M.PageView.design({

    /* Use the 'events' property to bind events like 'pageshow' */
    events: {
        pageshow: {
            target: MobileGas.ReportStationViewController,
            action: 'init'
        }
    },

    cssClass: 'addStation',

    childViews: 'header content tabBar',

    header: M.ToolbarView.design({
        value: 'Tankstelle melden',
        anchorLocation: M.TOP,
        showBackButton:YES
    }),

    content: M.ScrollView.design({//
        childViews: 'grid grid2 zipCodeTextfield streetTextField cityTextField sendButton',

        grid: M.GridView.design({

            childViews: 'button label',

            layout: M.TWO_COLUMNS,

            button: M.ButtonView.design({

                value: 'Marke:',
                events:{
                    tap:{
                        target:MobileGas.NavigationController,
                        action:'switchToSingleBrandPage'
                    }
                }
            }),

            label:M.LabelView.design({
                cssClass:'markenLabel',
                value:'Bitte Wählen',
                computedValue:{
                    contentBinding: {
                        target: MobileGas.ReportStationViewController,
                        property: 'brand'
                    },
                    value:'Bitte Wählen',
                    operation: function(v) {
                        console.log('Computed Value:' + v);
                        if (v.label) {
                            v = v.label;
                        }
                        return v;
                    }
                }

            })

        }),

        grid2: M.GridView.design({

            childViews: 'gpstext gpsSwitcher',

            

            layout: M.TWO_COLUMNS,

            gpstext:M.LabelView.design({
                value:'GPS:'
            }),


            gpsSwitcher:M.ButtonGroupView.design({
                /* configure the button group as needed */
                direction: M.HORIZONTAL,

                /* add event listener for the 'change' event */
                events: {
                    change: {
                        target: MobileGas.ReportStationViewController,
                        action: 'toggleGPS'
                    }
                },

                /* add the child views (of type M.ButtonView) */
                childViews: 'onButton offButton',

                onButton: M.ButtonView.design({
                    value: 'ON'

                }),

                offButton: M.ButtonView.design({
                    value: 'OFF'
                })
            })

        }),



        streetTextField: M.TextFieldView.design({
            label:'Straße:',
            contentBindingReverse:{
                target:MobileGas.ReportStationViewController,
                property:'street'
            }
        }),
        zipCodeTextfield: M.TextFieldView.design({
            label:'PLZ:',
            contentBindingReverse:{
                target:MobileGas.ReportStationViewController,
                property:'zipCode'
            }
        }),
        cityTextField: M.TextFieldView.design({
            label:'Ort:',
            contentBindingReverse:{
                target:MobileGas.ReportStationViewController,
                property:'city'
            }
        }),
        sendButton: M.ButtonView.design({
            value:'Tankstelle speichern',
            events:{
                tap:{
                    target:MobileGas.ReportStationViewController,
                    action:'addStationToApi'
                }
            }
        })

    }),

    tabBar: MobileGas.TabBar

});


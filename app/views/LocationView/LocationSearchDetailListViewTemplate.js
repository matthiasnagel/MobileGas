// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileFuel
// View: LocationSearchDetailListViewTemplate
// ==========================================================================

MobileFuel.LocationSearchDetailListViewTemplate = M.ListItemView.design({

    events: {
        tap: {
            target: MobileFuel.FuelModifyController,
            action:'fuelItemClicked'
        }
    },

    childViews: 'type price_current currency updateText update',

    type: M.LabelView.design({
        computedValue: {
            valuePattern: '<%= type %>',
            operation: function(v) {
                return v + ':';
            }
        },
        cssClass: 'fuelType'
    }),

    price_current: M.LabelView.design({
        valuePattern: '<%= price_current %>',
        cssClass: 'price_current'
    }),

    currency: M.LabelView.design({
        valuePattern: '<%= currency %>',
        cssClass: 'currency'
    }),

    updateText: M.LabelView.design({
        value: 'Aktuallisiert: ',
        cssClass: 'updateText'
    }),

    update: M.LabelView.design({
        valuePattern: '<%= update %>',
        cssClass: 'update'
    })
});


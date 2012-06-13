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

    childViews: 'type price_current currency update',
 
    type: M.LabelView.design({
      valuePattern: '<%= type %>'
    }),

    price_current: M.LabelView.design({
      valuePattern: '<%= price_current %>'
    }),

    currency: M.LabelView.design({
      valuePattern: '<%= currency %>'
    }),

    update: M.LabelView.design({
      valuePattern: '<%= update %>'
    })
});


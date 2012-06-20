// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileFuel
// View: SearchResultsListItemTemplate
// ==========================================================================

MobileFuel.SearchResultsListItemTemplate = M.ListItemView.design({

    childViews: 'stationname adress plz city',
    isSelectable: YES,

    events: {
        tap: {
            target: MobileFuel.ListItemController,
            action:'resultStationClicked'
        }
    },

    stationname: M.LabelView.design({
        valuePattern: '<%= brandName %>'
    }),

    adress: M.LabelView.design({
        computedValue: {
            valuePattern: '<%= adress %>',
            operation: function(v) {
                return v;
            }
        },
        cssClass:'searchAdress'
    }),

    plz:M.LabelView.design({
        computedValue: {
            valuePattern: '<%= plz %>',
            operation: function(v) {
                return v;
            }
        },
        cssClass:'searchPlz'
    }),

    city:M.LabelView.design({
        computedValue: {
            valuePattern: '<%= city %>',
            operation: function(v) {
                return v;
            }
        },
        cssClass:'searchCity'
    })
});


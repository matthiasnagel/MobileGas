// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileFuel
// View: SearchResultsListItemTemplate
// ==========================================================================

MobileFuel.SearchResultsListItemTemplate = M.ListItemView.design({

    childViews: 'stationname adress plz city',

    events: {
        tap: {
            target: MobileFuel.FavoriteController,
            action:'favoriteItemClicked'
        }
    },

    stationname: M.LabelView.design({
        computedValue: {
            valuePattern: '<%= brand %>',
            operation: function(v) {
                var brandname = '';

                if (v == '0')
                    brandname = 'Alle';
                else if (v == '1')
                    brandname = 'Agip';
                else if (v == '2')
                    brandname = 'Aral';
                else if (v == '3')
                    brandname = 'AVIA';
                else if (v == '4')
                    brandname = 'bft';
                else if (v == '5')
                    brandname = 'Esso';
                else if (v == '6')
                    brandname = 'Jet';
                else if (v == '7')
                    brandname = 'OIL!';
                else if (v == '8')
                    brandname = 'OMV';
                else if (v == '9')
                    brandname = 'Orlen';
                else if (v == '10')
                    brandname = 'Q!';
                else if (v == '11')
                    brandname = 'Shell';
                else if (v == '12')
                    brandname = 'Star';
                else if (v == '13')
                    brandname = 'Tamoil';
                else if (v == '14')
                    brandname = 'TOTAL';
                else if (v == '15')
                    brandname = 'Westfalen';
                else if (v == '16')
                    brandname = 'Sonstige';

                return brandname;
            }
        }
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


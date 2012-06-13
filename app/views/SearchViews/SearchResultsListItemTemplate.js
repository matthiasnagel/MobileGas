// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileTank
// View: SearchResultsListItemTemplate
// ==========================================================================

MobileTank.SearchResultsListItemTemplate = M.ListItemView.design({

    childViews: 'stationname adress plz city',
    isSelectable: YES,

    events: {
        tap: {
            target: MobileTank.ListItemController,
            action:'resultStationClicked'
        }
    },

    stationname: M.LabelView.design({
        computedValue: {
            valuePattern: '<%= stationname %>',
            operation: function(v) {
                var n = '';
                if(v==null){
                    n='Kein Name vorhanden';
                }
                else{
                    n=v;
                }
                return 'Name: ' + n;
            }
        }

    }),

    adress: M.LabelView.design({
        computedValue: {
            valuePattern: '<%= adress %>',
            operation: function(v) {
                return 'Adresse: ' + v;
            }
        }
    }),

    plz:M.LabelView.design({
        computedValue: {
            valuePattern: '<%= plz %>',
            operation: function(v) {
                return 'PLZ: ' + v;
            }
        }
    }),

    city:M.LabelView.design({
        computedValue: {
            valuePattern: '<%= city %>',
            operation: function(v) {
                return 'Ort: ' + v;
            }
        }
    })
});


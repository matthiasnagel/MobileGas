// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileFuel
// View: FavoritesListViewTemplate
// ==========================================================================

MobileFuel.FavoritesListViewTemplate = M.ListItemView.design({

    events: {
        tap: {
            target: MobileFuel.FavoriteController,
            action:'favoriteItemClicked'
        }
    },

    childViews: 'adress city',

    id: M.LabelView.design({
        valuePattern: '<%= id %>'
    }),

    adress: M.LabelView.design({
        valuePattern: '<%= adress %>'
    }),

    city: M.LabelView.design({
        valuePattern: '<%= city %>'
    })

});


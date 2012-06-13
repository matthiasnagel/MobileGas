// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileTank
// View: FavoritesListViewTemplate
// ==========================================================================

MobileTank.FavoritesListViewTemplate = M.ListItemView.design({

    events: {
        tap: {
            target: MobileTank.FavoriteController,
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


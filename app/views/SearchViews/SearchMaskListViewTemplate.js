MobileFuel.SearchMaskListViewTemplate = M.ListItemView.design({
    childViews: 'name chosen',
    events: {
        tap: {
            target: MobileFuel.ListItemController,
            action:'searchMaskItemClicked'
        }
    },

    id: M.LabelView.design({
        valuePattern: '<%= id%>'
    }),
    name: M.LabelView.design({
        valuePattern: '<%= name %>'
    }),

    chosen: M.LabelView.design({
        valuePattern: '<%= chosen%>'
    })


});
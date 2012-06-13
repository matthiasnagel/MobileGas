// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileFuel
// ==========================================================================

var MobileFuel  = MobileFuel || {};

MobileFuel.app = M.Application.design({

    /* Define the entry/start page of your app. This property must be provided! */
    entryPage : 'searchView',

    searchView: MobileFuel.SearchView,
    locationSearchView: MobileFuel.LocationSearchView,
    favoritesView : MobileFuel.FavoritesView,
    optionsView: MobileFuel.OptionsView,

    searchBrandView: MobileFuel.BrandView,
    searchFuelView: MobileFuel.FuelView,
    searchRadiusView: MobileFuel.RadiusView,
    searchModeView: MobileFuel.ModeView,
    searchDisplayModeView: MobileFuel.DisplayModeView,

    locationSearchDetailView: MobileFuel.LocationSearchDetailView,
    fuelModifyView: MobileFuel.FuelModifyView,

    reportingPage: MobileFuel.ReportStationView,
    singleBrandPage: MobileFuel.SingleBrandListView,
    resultsPage: MobileFuel.SearchResultsView
});
// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileGas
// ==========================================================================

var MobileGas  = MobileGas || {};

MobileGas.app = M.Application.design({

    /* Define the entry/start page of your app. This property must be provided! */
    entryPage : 'searchView',

    searchView: MobileGas.SearchView,
    locationSearchView: MobileGas.LocationSearchView,
    favoritesView : MobileGas.FavoritesView,
    optionsView: MobileGas.OptionsView,

    searchBrandView: MobileGas.BrandView,
    searchFuelView: MobileGas.FuelView,
    searchRadiusView: MobileGas.RadiusView,
    searchModeView: MobileGas.ModeView,
    searchDisplayModeView: MobileGas.DisplayModeView,

    locationSearchDetailView: MobileGas.LocationSearchDetailView,
    fuelModifyView: MobileGas.FuelModifyView,

    reportingPage: MobileGas.ReportStationView,
    singleBrandPage: MobileGas.SingleBrandListView,
    resultsPage: MobileGas.SearchResultsView
});
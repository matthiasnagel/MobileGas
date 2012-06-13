// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileTank 
// ==========================================================================

var MobileTank  = MobileTank || {};

MobileTank.app = M.Application.design({

    /* Define the entry/start page of your app. This property must be provided! */
    entryPage : 'searchView',

    searchView: MobileTank.SearchView,
    locationSearchView: MobileTank.LocationSearchView,
    favoritesView : MobileTank.FavoritesView,
    optionsView: MobileTank.OptionsView,

    searchBrandView: MobileTank.BrandView,
    searchFuelView: MobileTank.FuelView,
    searchRadiusView: MobileTank.RadiusView,
    searchModeView: MobileTank.ModeView,
    searchDisplayModeView: MobileTank.DisplayModeView,

    locationSearchDetailView: MobileTank.LocationSearchDetailView,
    fuelModifyView: MobileTank.FuelModifyView,

    reportingPage: MobileTank.ReportStationView,
    singleBrandPage: MobileTank.SingleBrandListView,
    resultsPage: MobileTank.SearchResultsView
});
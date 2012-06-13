// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileFuel
// Model: Station
// ==========================================================================

MobileFuel.Station = M.Model.create({

    /* Define the name of your model. Do not delete this property! */
    __name__: 'Station',

    /* Sample model properties: */

    id: M.Model.attr('String',{
    }),

    brand: M.Model.attr('Integer', {
    }),

    selfreport: M.Model.attr('Integer', {
    }),

    checked: M.Model.attr('Integer', {
    }),

    stationname: M.Model.attr('String', {
    }),

    country: M.Model.attr('String', {
    }),

    adress: M.Model.attr('String', {
    }),

    plz: M.Model.attr('String', {
    }),

    city: M.Model.attr('String', {
    }),

    latitude: M.Model.attr('Number', {
    }),

    longitude: M.Model.attr('Number', {
    }),

    fuel: M.Model.attr('Object', {
    })

}, M.DataProviderLocalStorage);



// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileGas
// Model: Fuel
// ==========================================================================

MobileGas.Fuel = M.Model.create({

    /* Define the name of your model. Do not delete this property! */
    __name__: 'Fuel',

    /* Sample model properties: */

    type: M.Model.attr('String',{
    }),

    currency: M.Model.attr('String', {
    }),

    price_current: M.Model.attr('Number', {
    }),

    update: M.Model.attr('String', {
    }),

    id: M.Model.attr('String', {

    })

}, M.DataProviderLocalStorage);

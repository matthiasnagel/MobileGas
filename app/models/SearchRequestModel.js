// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileFuel
// Model: SearchRequestModel
// ==========================================================================

MobileFuel.SearchRequestModel = M.Model.create({

    /* Define the name of your model. Do not delete this property! */
    __name__: 'SearchRequestModel',

    /* Sample model properties: */

    brands: M.Model.attr('String',{
    }),

    fuels: M.Model.attr('String', {
    }),

    radius: M.Model.attr('String', {

    }),

    location: M.Model.attr('Object',{

    }),

    zipcode: M.Model.attr('String',{

    }),

    displayMode: M.Model.attr('String',{
        
    })

}, M.DataProviderLocalStorage);

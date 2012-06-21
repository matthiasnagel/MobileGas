// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileGas
// Model: SearchRequestModel
// ==========================================================================

MobileGas.ReportRequestModel = M.Model.create({

    /* Define the name of your model. Do not delete this property! */
    __name__: 'SearchRequestModel',

    /* Sample model properties: */

    brandId: M.Model.attr('String',{
    }),

    street: M.Model.attr('String', {
    }),

    zipCode: M.Model.attr('String', {

    }),

    city: M.Model.attr('String',{

    }),

    location: M.Model.attr('Object',{

    }),

    brandName: M.Model.attr('String',{
        
    })

}, M.DataProviderLocalStorage);

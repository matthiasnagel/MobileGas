// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileFuel
// Controller: BrandViewController
// ==========================================================================

MobileFuel.BrandViewController = M.Controller.extend({


    gasBrands: null,


    alleFlag:NO,

    results:[],


    init: function(isFirstLoad) {
        if (isFirstLoad) {
            var brandarray = [];
            var tmpBrand;
            var that = this;
            $.getJSON('brands.json',
                function(data) {
                    _.each(data, function(brand) {
                        tmpBrand = {value:brand.id,label:brand.title};
                        brandarray.push(tmpBrand);
                    })
                }).success(function() {
                    console.log('brands initialized done');
                    that.set('gasBrands', brandarray);
                });
        }
    },

    getSelection: function() {
        var selectionList = M.ViewManager.getView('searchBrandView', 'brandSelection');
        var selection = selectionList.getSelection(YES);

        if (selection.length==0) {
            return '0';//0 für alle brands
        } else {
            //var array = [];
            var string = '';
            for (var i in selection) {
                string += selection[i].value + ';';

                //array.push({value:selection[i].value,name:selection[i].label});
            }
            return (string.substr(0, string.length - 1));
        }


    },


    brandChosen:function(itemValues, items) {
        
        var selectionList = M.ViewManager.getView('searchBrandView', 'brandSelection');
        var that = this;
        _.each(itemValues, function(item) {
            if (item == 0 ) {
                if(that.alleFlag==NO){
                    selectionList.removeSelection();
                    selectionList.setSelection([0]);
                    that.alleFlag = YES;
                    return;
                }
                if(that.alleFlag==YES){
                    selectionList.removeSelection();
                }


            } else {


            }
        })
        var array = selectionList.getSelection(YES);
        var results = [];
        _.each(array,function(selection){
            results.push(selection.label);
        })
        MobileFuel.SearchController.marken.chosen = results;
        MobileFuel.SearchController.setSearchCriteria();
    },
    alertMethod:function(){
        M.DialogView.alert({
            title: 'Fehler',
            message: 'Bitte Position oder PLZ angeben.',
            confirmButtonValue: 'Ok',
            callbacks: {
                confirm: {
                    action: function() {
                        console.log('ASDF');
                    }
                }
            }
        });
    },

    returnGasBrands:function(){
        return this.gasBrands;
    }

});

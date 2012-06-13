// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileTank
// Controller: FuelViewController
// ==========================================================================

MobileTank.FuelViewController = M.Controller.extend({

    fuels: null,


    init: function(isFirstLoad) {
        if (isFirstLoad) {
            var fuelarray = [];
            var tmpFuel;
            var that = this;
            $.getJSON('fuels.json',
                function(data) {
                    _.each(data, function(fuel) {
                        tmpFuel = {value:fuel.id,label:fuel.title};
                        fuelarray.push(tmpFuel);
                    })
                }).success(function() {
                    that.set('fuels', fuelarray);
                });
        }


    },

    getSelection:function() {
        var selectionList = M.ViewManager.getView('searchFuelView', 'fuelSelection');
        var selection = selectionList.getSelection(YES);
        if (selection.length == 0) {
            return '1;2;3;4;12';//alle kraftstoffe einbauen
        } else {
            var string = '';
            for (var i in selection) {
                string += selection[i].value + ';';

                //array.push({value:selection[i].value,name:selection[i].label});
            }
            return (string.substr(0, string.length - 1));
        }


    },
    alertMethod:function() {
        M.DialogView.alert({
            title: 'Fehler',
            message: 'Bitte Position oder PLZ angeben.',
            confirmButtonValue: 'Ok',
            callbacks: {
                confirm: {
                    action:function() {
                        console.log('ok');
                    }
                }
            }
        });
    },

    fuelChosen:function(itemValues, items) {
        var selectionList = M.ViewManager.getView('searchFuelView', 'fuelSelection');
       
        var array = selectionList.getSelection(YES);
        var results = [];
        _.each(array,function(selection){
            results.push(selection.label);
        })
        MobileTank.SearchController.spritarten.chosen = results;
        MobileTank.SearchController.setSearchCriteria();
    }

});

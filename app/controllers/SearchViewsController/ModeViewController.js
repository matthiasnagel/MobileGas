// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileFuel
// Controller: ModeViewController
// ==========================================================================

MobileFuel.ModeViewController = M.Controller.extend({

    /* sample controller property */
    plzValue: '',
    gpsLocation: '',
    /*
     * Sample function
     * To handle the first load of a page.
     */
    init: function(isFirstLoad) {
        if (isFirstLoad) {
            /* do something here, when page is loaded the first time. */
        }

    },

    /*
     * Example function, which shows how to switch to another page
     * Function is triggered by setting target & action in a view.
     */
    currentLocation: function() {
        M.LoaderView.show('Lade aktuelle Position ...');
        M.LocationManager.getLocation(this, this.onSuccess, this.onError, {
            maximumAge: 0,
            timeout: 10000,
            accuracy: 5000
        });
    },
    onSuccess: function(location) {

        this.set('gpsLocation', location);
        this.set('plzValue', null);
        //ListItem Inhalt aktualisieren
        this.changeListItemText();
        M.LoaderView.hide();
        this.goBackToSearchView();
    },

    onError: function(error) {
        M.LoaderView.hide();
    },

    viaPlz: function() {
        this.set('gpsLocation', null);
        //ListItemAktualisieren
        this.changeListItemText();

        this.goBackToSearchView();
    },

    goBackToSearchView:function() {
        var a;
        if (this.gpsLocation) {
            a = 'via Gps';
        }
        else {
            if (this.plzValue) {
                a = 'Postleitzahl: '+ this.plzValue;
            } else {
                a = '-1';
            }
        }
        MobileFuel.SearchController.suchmodus.chosen = a;
        MobileFuel.SearchController.setSearchCriteria();
        history.back(-1);
    },

    getSelection:function() {
        if (this.gpsLocation) {
            return [this.gpsLocation,-1];
        }
        else {
            if (this.plzValue) {
                return [null,this.plzValue];
            } else {
                return -1;
            }
        }


    },

    alertMethod:function() {
        M.DialogView.alert({
            title: 'Fehler',
            message: 'Bitte Position oder PLZ angeben.',
            confirmButtonValue: 'Ok',
            callbacks: {
                confirm: {
                    action: function() {
                        MobileFuel.NavigationController.switchToModeView();
                    }
                }
            }
        });
    },



    changeListItemText:function(text){

        //var listItem = M.ViewManager.getView('searchView','');
        //listItem.blalbalba = text;
    }

});

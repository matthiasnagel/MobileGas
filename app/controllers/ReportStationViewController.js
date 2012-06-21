// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileGas
// Controller: AddStationController
// ==========================================================================

MobileGas.ReportStationViewController = M.Controller.extend({

    /* sample controller property */
    street: null,
    zipCode:null,
    city:null,

    currentGpsPosition:null,//(location object

    brand:"Bitte Wählen",

    adressFlag:YES,

    /*
     * Sample function
     * To handle the first load of a page.
     */
    init: function(isFirstLoad) {
        if (isFirstLoad) {
            var buttonGroup = M.ViewManager.getView('reportingPage', 'gpsSwitcher');
            buttonGroup.setActiveButton(buttonGroup.offButton.id);
        }

    },

    toggleGPS:function() {
        var buttonGroup = M.ViewManager.getView('reportingPage', 'gpsSwitcher');
        var activeButton = buttonGroup.getActiveButton();
        console.log(activeButton._name);
        if (activeButton._name === 'onButton') {
            this.currentLocation();
            this.adressFlag = NO;
        }
        else {
            this.set('currentGpsPosition', null);
            this.adressFlag = YES;
        }
    },

    currentLocation: function() {
        M.LoaderView.show('Lade aktuelle Position ...');

        M.LocationManager.getLocation(this, this.onSuccess, this.onError, {
            maximumAge: 0,
            timeout: 10000,
            accuracy: 5000
        });
    },
    onSuccess: function(location) {

        console.log('success');

        this.set('currentGpsPosition', location);
        this.set('zipCode', null);
        this.set('street', null);
        this.set('city', null);

        M.LoaderView.hide();
    },

    onError: function(error) {
        M.LoaderView.hide();
        M.Logger.log(error);

    },

    /*
     * Example function, which shows how to switch to another page
     * Function is triggered by setting target & action in a view.
     */
    addStationToApi: function() {


        if (this.brand == null) {
            M.DialogView.alert({
                title: 'Fehler',
                message: 'Bitte Marke wählen.',
                confirmButtonValue: 'Ok',
                callbacks: {
                    confirm: {
                        action: function() {

                        }
                    }
                }
            });
            return;
        }

        if (this.adressFlag == YES) {
            if (this.zipCode == null) {
                M.DialogView.alert({
                    title: 'Fehler',
                    message: 'Bitte PLZ angeben.',
                    confirmButtonValue: 'Ok',
                    callbacks: {
                        confirm: {
                            action: function() {

                            }
                        }
                    }
                });
                return;

            }
            if (this.street == null) {
                M.DialogView.alert({
                    title: 'Fehler',
                    message: 'Bitte Straße angeben.',
                    confirmButtonValue: 'Ok',
                    callbacks: {
                        confirm: {
                            action: function() {

                            }
                        }
                    }
                });
                return;
            }
            if (this.city == null) {
                M.DialogView.alert({
                    title: 'Fehler',
                    message: 'Bitte Stadt angeben.',
                    confirmButtonValue: 'Ok',
                    callbacks: {
                        confirm: {
                            action: function() {

                            }
                        }
                    }
                });
                return;
            }
        }

        var reportRequestModel = MobileGas.ReportRequestModel.createRecord({
            brandId:this.brand.value,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
            location: this.currentGpsPosition,
            brandName: this.brand.name
        });


        console.log(reportRequestModel);
        MobileGas.RequestController.reportStation(reportRequestModel);

        //Object to Request function

    }

});

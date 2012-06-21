// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MobileGas
// Controller: RequestController
// ==========================================================================

MobileGas.RequestController = M.Controller.extend({

    udid: null,

    /*
     * Sample function
     * To handle the first load of a page.
     */
    init: function(isFirstLoad) {
        if (isFirstLoad) {
            /* do something here, when page is loaded the first time. */
        }
        /* do something, for any other load. */
    },

    //Gets Cookie, Browser saves it
    getCookie: function() {
        this.getUdid();
    },

    getStationList: function(location) {
        M.Request.init({
            url: '/mehrTanken/list?result=xml&plz=-1&lat='
                + location.latitude + '&lon='
                + location.longitude + '&brand_id=0&fuel_id=1&radius=4&interval=0&udid='
                + this.udid[0].record.udid + '&device=iphone HTTP/1.1',
            method: 'GET',
            isJSON: NO,
            onSuccess: function(data, msg, xhr) {
                console.log('getStationList-Request successful');
                MobileGas.MapController.parseXML(data);
            },
            onError: function(xhr, msg) {
                console.log('Error: ' + msg);
            }
        }).send();
    },

    searchStationList: function(searchRequest) {
        console.log(searchRequest);

        var searchUrl = '/mehrTanken/list?result=xml';

        if (searchRequest.record.location == null) {
            searchUrl = searchUrl + '&plz=' + searchRequest.record.zipcode;
        }
        else {
            searchUrl = searchUrl + '&plz=-1&lat='
                + searchRequest.record.location.latitude + '&lon='
                + searchRequest.record.location.longitude;
        }

        searchUrl = searchUrl + '&brand_id='
            + searchRequest.record.brands + '&fuel_id='
            + searchRequest.record.fuels + '&radius='
            + searchRequest.record.radius + '&interval=0&show_prices=1&udid='
            + this.udid[0].record.udid + '&device=iphone HTTP/1.1';

        M.Request.init({

            url: searchUrl,
            method: 'GET',
            isJSON: NO,
            onSuccess: function(data, msg, xhr) {
                console.log('searchStationList-Request successful call handleStation');
                MobileGas.SearchController.handleStationList(data);
            },
            onError: function(xhr, msg) {
                console.log('Error: ' + msg);
            }
        }).send();
    },

    getStationFuels: function(stationId) {
        M.Request.init({
            url: '/mehrTanken/detail?id='
                + stationId + '&result=xml&udid='
                + this.udid[0].record.udid + '&device=iphone HTTP/1.1',
            method: 'GET',
            isJSON: NO,
            onSuccess: function(data, msg, xhr) {
                console.log('getStationFuels-Request successful');
                MobileGas.LocationSearchDetailController.parseXML(data);
            },
            onError: function(xhr, msg) {
                console.log('Error: ' + msg);
            }
        }).send();
    },

    saveNewPrice: function(fuelId, stationId, fuelPrice) {
        M.Request.init({
            url: '/mehrTanken/detail?result=xml&id='
                + stationId + '&act=add_price&price%5b'
                + fuelId + '%5d='
                + fuelPrice + '&udid='
                + this.udid[0].record.udid + '&device=iphone HTTP/1.1',
            method: 'GET',
            isJSON: NO,
            onSuccess: function(data, msg, xhr) {
                console.log('saveNewPrice-Request successful');
                history.back(-1);

                M.DialogView.alert({
                    title: 'Hinweis',
                    message: 'Deine Änderung wird in kurzer Zeit übernommen',
                    confirmButtonValue: 'Ok',
                    callbacks: {
                        confirm: {
                            action: function() {
                                console.log('savePriceConfirmation');
                            }
                        }
                    }
                });
            },
            onError: function(xhr, msg) {
                console.log('Error: ' + msg);
            }
        }).send();
    },

    reportStation: function(reportRequest) {
        // /tankstelle_melden?result=xml&brand_id=14&street=50%20Boulevard%20Victoire&plz=67000&city=Strasbourg&name=TOTAL&udid=4f73846cab684134ea46f23b29a25900f1d158d0&device=iphone HTTP/1.1

        //http://mehr-tanken.de/list?result=xml&plz=-1&lat=48.779144&lon=9.189400&brand_id=16&fuel_id=0&radius=5&interval=0&udid=4f73846cab684134ea46f23b29a25900f1d158d0&device=iphone
        var request;
        if (reportRequest.record.location != null) {
            request = M.Request.init({
                url: '/mehrTanken/list?result=xml&plz=-1'
                    + '&lat=' + reportRequest.record.location.latitude
                    + '&lon=' + reportRequest.record.location.longitude
                    + '&brand_id=' + reportRequest.record.brandId
                    + '&fuel_id=0'
                    + '&radius=5'
                    + '&interval=0'
                    + '&udid=' + this.udid[0].record.udid
                    + '&device=iphone HTTP/1.1',
                method: 'GET',
                isJSON: NO,
                onSuccess: function(data, msg, xhr) {
                    console.log('successful');
                },
                onError: function(xhr, msg) {
                    console.log('Error: ' + msg);
                }
            });
        } else {
            request = M.Request.init({
                url: '/mehrTanken/tankstelle_melden/?result=xml'
                    + '&brand_id=' + reportRequest.record.brandId
                    + '&street=' + reportRequest.record.street
                    + '&plz=' + reportRequest.record.zipCode
                    + '&city=' + reportRequest.record.city
                    + '&name=' + reportRequest.record.brandName
                    + '&udid=' + this.udid[0].record.udid
                    + '&device=iphone HTTP/1.1',
                method: 'GET',
                isJSON: NO,
                onSuccess: function(data, msg, xhr) {
                    console.log('successful');
                },
                onError: function(xhr, msg) {
                    console.log('Error: ' + msg);
                }
            });
        }


        console.log(request);

    },

    getUdid: function() {

        this.set('udid', MobileGas.Udid.find());

        if (MobileGas.RequestController.udid.length == 0) {
            console.log('new udid');

            var udid = this.udidGenerator();
            var tempArray = [];
            var udidModel = MobileGas.Udid.createRecord({
                udid: udid
            });

            tempArray.push(udidModel);
            this.set('udid', tempArray);
            udidModel.save();

            M.Request.init({
                url: '/mehrTanken/news?result=xml&lang=de&version=2.5.0&udid='
                    + udid + '&device=iphone%20HTTP/1.1',
                method: 'GET',
                isJSON: NO,
                onSuccess: function(data, msg, xhr) {

                    console.log('getCookie-Request successful');
                },
                onError: function(xhr, msg) {
                    this.set('udid', MobileTank.Udid.find());
                    console.log('Error: ' + msg);
                }
            }).send();
        }
        else {
            console.log('old udid');
            M.Request.init({
                url: '/mehrTanken/news?result=xml&lang=de&version=2.5.0&udid='
                    + this.udid[0].record.udid + '&device=iphone%20HTTP/1.1',
                method: 'GET',
                isJSON: NO,
                onSuccess: function(data, msg, xhr) {
                    console.log('getCookie-Request successful');
                },
                onError: function(xhr, msg) {
                    console.log('Error: ' + msg);
                }
            }).send();
        }
    },

    udidGenerator: function() {
        var S4 = function() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4());
    }

});

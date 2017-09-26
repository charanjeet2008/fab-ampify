var constants = require('./constants.js'),
    apiRequester = require('./apiRequester.js');


var apis = {
    hotelDataApi: function (location, apiCallback) {
        var url = constants.MWEB_URL + "/hotelList";
            apiRequester.executeRequest(url,apiCallback,!1);
    }
}

module.exports = apis

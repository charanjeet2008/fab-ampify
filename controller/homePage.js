/**
 * Created by Surbhi Baweja on 02//08/17
 */
var async = require('async'),
    apis = require('../apiUrls'),
    constants = require('../constants');

var getDataForLocation = function(location, callback) {
    apis.hotelDataApi(location, function(error, cityData) {
        callback(null, cityData);
    });
}

exports.getHomePage = function(req, res) {
    res.render('home-page/index');

}



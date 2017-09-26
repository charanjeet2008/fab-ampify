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

exports.getCityPage = function(req, res) {
    async.waterfall([
        function (callback) {
            getDataForLocation(req.url, callback);            
        },
        function (cityData, callback) {
            res.header('Cache-Control', 'max-age=900');
            var localitySearch = (req.params.locality) ? !0 : !1;
            res.render('city-page/index',{ localitySearch: localitySearch , cityData : cityData, location: req.params.location, baseUrl:constants.API_URL, locality:req.params.locality});
        }
    ], function (err, result) {
    });

}



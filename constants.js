/**
 * Created by charanjeetkaur on 19/07/17.
 */
var express = require('express'),
    config = require('./config.json'),
    app = express(), 
    API_URL = '',
    MWEB_URL = '';   

if (app.get('env') == 'production') {
    API_URL = config.prodBaseUrl;
    MWEB_URL = config.prodMwebUrl;
}
else if (app.get('env') == 'development') {
    API_URL = config.devBaseUrl;
    MWEB_URL = config.devMwebUrl;
}
else if (app.get('env') == 'local') {
    API_URL = config.localBaseUrl;
    MWEB_URL = config.localMwebUrl;
}
else {
    API_URL = config.stagingBaseUrl;
    MWEB_URL = config.stagingMwebUrl;
}

var constants = {
    'API_URL' : API_URL,
    'MWEB_URL' : MWEB_URL,
    'NEARBY_HOTEL_URL' : '/mapi/mweb/catalog/cityProperties/?' +
            'islatLngSearch={islatLngSearch}&' +
            'city={city}&' +
            'locationLatLng={locationLatLng}&' +
            'propertyId={propertyId}',  
}

module.exports = constants

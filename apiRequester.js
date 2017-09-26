/**
 * Created by charanjeetkaur on 19/07/17.
 */
var request = require('superagent');

var apiRequester = {
   
    executeRequest: function(url,apiCallback,useData) {
            console.log('AMP API URL:::',url);
            request
            .get(url)
            .end(function (err, res) {
                if (res.text) {
                    console.log(res.text);
                    var response = JSON.parse(res.text);
                    var callBack = useData ? response.metadata.data : response.metadata;
                    apiCallback(null,callBack);
                }
            })    
    }

}    

module.exports = apiRequester


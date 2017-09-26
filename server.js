const express = require('express');
const bodyParser = require('body-parser');

console.log("process.env.PORT ::: %s",process.env.PORT);
var cityController = require("./controller/cityPage"),
    homeController = require("./controller/homePage")
    constants = require('constants'),
    PORT = normalizePort(process.env.PORT || '4001');


const app = express();

// set the view engine to ejs

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// index page
app.listen(PORT, function(req,res){
    console.log("Server Started on ", PORT)
});
app.get('/',homeController.getHomePage);

app.get('/hotels-in-:location', cityController.getCityPage);

app.get('*', function(req, res) {
		res.render('common/404Page',{baseUrl:constants.API_URL});
});


/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}



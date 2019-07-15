var quotes = require('../controllers/controllers');

module.exports = function(app){
    app.get('/', function (req, res) {
        weather.index(req, res) ;
    })
}
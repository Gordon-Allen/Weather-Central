var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const path = require('path');
const flash = require('express-flash');
app.use(flash());

app.use(express.static( __dirname + '/public/dist/public' ));

var session = require('express-session');
app.use(session({
    secret: 'deltaomegataudelta',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8080, function(){
    console.log('listening at port 8080');
})

require('./server/config/mongoose');
require('./server/config/routes')(app);
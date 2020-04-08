require('dotenv').config()
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json()) // for parsing application/json
app.use(
  bodyParser.urlencoded({
    extended: true
  })
) // for parsing application/x-www-form-urlencoded

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

require('./controllers/pastes.controller')(app);

// Finally, start our server
app.listen(PORT, function() {
  console.log(`Hastebot listening on port ${process.env.PORT}`)
})

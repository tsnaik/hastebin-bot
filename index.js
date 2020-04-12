require('dotenv').config()
var express = require('express')
var app = express()
var cors = require('cors')
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(cors());

require('./controllers/pastes.controller')();


app.listen(PORT, function() {
  console.log(`Hastebot listening on port ${process.env.PORT}`)
})

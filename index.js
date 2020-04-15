const Telegraf = require('telegraf')
require('dotenv').config()
var express = require('express')
var app = express()
var cors = require('cors')
const PORT = process.env.PORT || 5000;

app.use(cors());

const bot = new Telegraf(process.env.TELEGRAM_TOKEN)
const url = process.env.BOT_URL;
const webhookPath = `/${process.env.TELEGRAM_TOKEN}/new-message`;

bot.telegram.setWebhook(url.concat(webhookPath))
  .catch((err) => console.error(err));
app.use(bot.webhookCallback(webhookPath));

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to mongo at ' + process.env.MONGODB_URI);
});

require('./controllers/pastes.controller')(bot);

app.listen(PORT, function () {
  console.log(`Hastebot listening on port ${process.env.PORT}`)
})

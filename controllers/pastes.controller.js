const startCommand = require('./commands/start.command')
const createCommand = require('./commands/create.command')
const Telegraf = require('telegraf')
const bot = new Telegraf(process.env.TELEGRAM_TOKEN)

module.exports = async function () {

    bot.start(startCommand)
    bot.help((ctx) => ctx.reply('Help message'))
    bot.hears(/\/create(.*)/, createCommand);
    bot.launch()
}   

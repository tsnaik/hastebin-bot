const startCommand = require('./commands/start.command')
const createCommand = require('./commands/create.command')


module.exports = async function (bot) {

    bot.start(startCommand)
    bot.help((ctx) => ctx.reply('Help message'))
    bot.hears(/\/create(.*)/, createCommand);
    bot.launch()
}   

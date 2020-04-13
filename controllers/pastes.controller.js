const startCommand = require('./commands/start.command')
const createCommand = require('./commands/create.command')


module.exports = function (bot) {
    bot.start(startCommand)
    bot.help((ctx) => ctx.reply('Help message'))
    bot.command('create', createCommand);
    bot.launch()
}   

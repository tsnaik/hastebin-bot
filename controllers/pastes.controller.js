const commandMap = require('./commands/commandMap');

module.exports = function (bot) {
    console.log('commands', commandMap);

    Object.entries(commandMap).forEach(entry => {
        bot.command(entry[0], entry[1]);
    });

    bot.help((ctx) => ctx.reply('Help message'));
    bot.launch()
}   

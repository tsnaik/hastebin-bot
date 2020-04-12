const hasteService = require('../../services/hastebin.service')

module.exports = async (ctx) => {
    const entity = ctx.message.entities.find((value) => value.type === 'bot_command');

    if (ctx.message.text.length < entity.length - entity.offset + 1) {
        text = 'Please add a code snippet after the command'
    } else {
        const snippet = ctx.message.text.substring(entity.length - entity.offset + 1);
        const response = await hasteService.createSnippet(snippet);
        text = `https://www.hastebin.com/${response.data.key}`;
    }
    ctx.reply(text);
}
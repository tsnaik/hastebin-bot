const hasteService = require('../../services/hastebin.service')
const STORE_CONFIG = { path: process.cwd() + '/storage/userOutputChatIds.json' };

module.exports = async (ctx) => {
    const store = require('data-store')(STORE_CONFIG);
    const entity = ctx.message.entities.find((value) => value.type === 'bot_command');

    if (ctx.message.text.length < entity.length - entity.offset + 1) {
        text = 'Please add a code snippet after the command'
    } else {
        const snippet = ctx.message.text.substring(entity.length - entity.offset + 1);
        try {
            const response = await hasteService.createSnippet(snippet);
            text = `https://www.hastebin.com/${response.data.key}`;
        } catch (error) {
            console.error(error.message);
            text = "Error with the hastebin server. Not my fault!"
        }
    }
    const senderId = ctx.from.id.toString();
    if (store.has(senderId)) {
        return await ctx.telegram.sendMessage(store.get(senderId), text);
    } else {
        return await ctx.reply(text);
    }
}
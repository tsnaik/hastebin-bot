const hasteService = require('../../services/hastebin.service')
const STORE_CONFIG = { path: process.cwd() + '/storage/userOutputChatIds.json' };

module.exports = async (ctx) => {
    const store = require('data-store')(STORE_CONFIG);
    const entity = ctx.message.entities.find((value) => value.type === 'bot_command');

    if (ctx.message.text.length < entity.length - entity.offset + 1) {
        return await ctx.reply('Please add a code snippet after the command');
    }
    const snippet = ctx.message.text.substring(entity.length - entity.offset + 1);
    let url = '';
    try {
        const response = await hasteService.createSnippet(snippet);
        url = `https://www.hastebin.com/${response.data.key}`;
    } catch (error) {
        console.error(error.message);
        return await ctx.reply('Error with the hastebin server. Not my fault!');
    }
    const senderId = ctx.from.id.toString();
    if (store.has(senderId)) {
        const newText = `[${ctx.from.first_name}](tg://user?id=${senderId}) sent a code snippet:\n\n`
        .concat(`[Click here to view](${url})`);
        return await ctx.telegram.sendMessage(store.get(senderId), newText, { parse_mode: 'MarkdownV2' });
    }
    return await ctx.reply(url);
}
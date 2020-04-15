const hasteService = require('../../services/hastebin.service')
const userOutputChatIdDAO = require('../../dao/userOutputChatIds.dao');

module.exports = async (ctx) => {
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
    const dbResult = await userOutputChatIdDAO.find(senderId);
    
    if (dbResult) {
        const newText = `[${ctx.from.first_name}](tg://user?id=${senderId}) sent a code snippet:\n\n`
        .concat(`[Click here to view](${url})`);
        return await ctx.telegram.sendMessage(dbResult.outputChatId, newText, { parse_mode: 'MarkdownV2' });
    }
    return await ctx.reply(url);
}
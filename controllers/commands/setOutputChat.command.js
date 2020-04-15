const STORE_CONFIG = { path: process.cwd() + '/storage/userOutputChatIds.json' };
const userOutputChatIdDAO = require('../../dao/userOutputChatIds.dao');

module.exports = async (ctx) => {
    const senderId = ctx.from.id.toString();
    const newChatId = ctx.message.chat.id.toString();
    await userOutputChatIdDAO.updateOrCreate({userId: senderId, outputChatId: newChatId});

    return await ctx.reply(`${ctx.from.first_name}, I will send your hastebin URLs to this chat from now on. Even when you send /create command to me in personal chat.`);
}
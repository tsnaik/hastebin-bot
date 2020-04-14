const STORE_CONFIG = { path: process.cwd() + '/storage/userOutputChatIds.json' };

module.exports = async(ctx) => {    
    const store = require('data-store')(STORE_CONFIG);
    const senderId = ctx.from.id.toString();
    const newChatId = ctx.message.chat.id.toString();
    store.set(senderId, newChatId);
    
    return await ctx.reply(`${ctx.from.first_name}, I will send your hastebin URLs to this chat from now on.`);
}
const WELCOME_MESSAGE = 'Welcome to hastebot. Send me a code snippet as a message and I will give you the hastebin URL for that message.';
module.exports = (ctx) => ctx.reply(WELCOME_MESSAGE)
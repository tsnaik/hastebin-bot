const HELP_MESSAGE = 'Send me a command `/create <code_snippet>` and I will give you the hastebin URL\\.'
module.exports = async (ctx) => await ctx.reply(HELP_MESSAGE, {parse_mode: 'MarkdownV2'})
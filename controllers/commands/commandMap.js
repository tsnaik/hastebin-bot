const startCommand = require('./start.command')
const createCommand = require('./create.command')
const helpCommand = require('./help.command')
const setOutputChatCommand = require('./setOutputChat.command')

module.exports = {
    start: startCommand,
    create: createCommand,
    help: helpCommand,
    setoutputhere: setOutputChatCommand,
}
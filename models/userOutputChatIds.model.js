const mongoose = require('mongoose');
const userOutputChatIdSchema = require('./userOutputChatIds.schema')
const userOutputChatIdModel = mongoose.model(
    'userOutputChatIdModel',
    userOutputChatIdSchema
)

module.exports = userOutputChatIdModel
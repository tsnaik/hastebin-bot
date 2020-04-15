const mongoose = require('mongoose');
const userOutputChatIdSchema = mongoose.Schema({
    userId: Number,
    outputChatId: Number,
}, { collection: 'userOutputChatIds' });

module.exports = userOutputChatIdSchema;
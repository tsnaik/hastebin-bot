const userOutputChatIdModel = require('../models/userOutputChatIds.model');

const updateOrCreate = async (userOutputChatId) => {
    console.log('updateOrCreate', userOutputChatId);
    const res = await userOutputChatIdModel.findOne({ userId: userOutputChatId.userId });
    if (res) {
        update(userOutputChatId);
    } else {
        createNew(userOutputChatId);
    }
}

const find = async (userId) => {
    return await userOutputChatIdModel.findOne({ userId });
}
const createNew = (userOutputChatId) => {
    console.log('creating new');
    const toSave = new userOutputChatIdModel(userOutputChatId);
    toSave.save((err) => {
        if (err) {
            console.error(err);
            throw Error('Some error occurred. Please try again.');
        }
    });
}

const update = (userOutputChatId) => {
    console.log('updating existing');
    userOutputChatIdModel.updateOne(userOutputChatId, (err, res) => {
        console.log('res', res);
        if (err) {
            console.error(err);
            throw Error('Some error occurred. Please try again.');
        }
    });
}

module.exports = {
    updateOrCreate, find
}
const axios = require('axios')

sendMessage = (chatId, text) =>
    axios
        .post(
            `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`,
            {
                chat_id: chatId,
                text: text
            }
        )


module.exports = {
    sendMessage
}
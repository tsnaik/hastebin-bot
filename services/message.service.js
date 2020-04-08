const axios = require('axios')

sendMessage = (chatId, text) => {
    axios
        .post(
            `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`,
            {
                chat_id: chatId,
                text: text
            }
        )
        .then(response => {
            // We get here if the message was successfully posted
            console.log('Message posted')
            res.end('ok')
        })
        .catch(err => {
            // ...and here if it was not
            console.log('Error :', err)
            res.end('Error :' + err)
        })
}

module.exports = {
    sendMessage
}
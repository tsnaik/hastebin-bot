const messageService = require('../services/message.service')
const WELCOME_MESSAGE = 'Welcome to hastebot. Send me a code snippet as a message and I will give you the hastebin URL for that message.';
module.exports = async function (app) {
    app.get('/hello', (req, res) => res.send("hello world"));

    app.post(`/${process.env.TELEGRAM_TOKEN}/new-message`, function (req, res) {
        const { message } = req.body;
        const chatId = message.chat.id;
        console.log(message);

        if (!message) {
            return res.end();
        }

        let text;
        switch (message.text) {
            case '/start':
                text = WELCOME_MESSAGE;
                break;
            default:
                text = message.text;
                break;
        }

        try {
            const response = await messageService.sendMessage(chatId, text);
            console.log(`Message posted: ${text}`)
            console.log(response);
            res.end('ok');
        } catch (err) {
            console.log('Error :', err)
            res.end('Error :' + err)
        }
    })
}
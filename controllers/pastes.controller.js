const messageService = require('../services/message.service')
const WELCOME_MESSAGE = 'Welcome to hastebot. Send me a code snippet as a message and I will give you the hastebin URL for that message.';

const sendMessage = async (chatId, text, res) => {
    try {
        const response = await messageService.sendMessage(chatId, text);
        console.log(`Message posted: ${text}`)
        res.end('ok');
    } catch (err) {
        console.log('Error :', err)
        res.end('Error :' + err)
    }
}
module.exports = function (app) {
    app.get('/hello', (req, res) => res.send("hello world"));

    app.post(`/${process.env.TELEGRAM_TOKEN}/new-message`, async function (req, res) {
        const { message } = req.body;
        console.log(message);

        if (!message || !message.chat) {
            return res.end();
        }

        const chatId = message.chat.id;
        let text;
        if (message.text === 'start') {
            text = WELCOME_MESSAGE;
            sendMessage(chatId, text, res);
            return;
        }

        if (message.text.startsWith('/create')) {
            if(message.text.length < 9) {
                text = 'Please add a code snippet after /create to create'
            } else {
                const snippet = message.text.substring(8);
                text = snippet;
            }
            sendMessage(chatId, text, res);
            return;
        }
        
        res.end();
    })
}
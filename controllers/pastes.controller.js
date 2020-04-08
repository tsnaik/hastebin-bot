const messageService = require('../services/message.service')
const hasteService = require('../services/hastebin.service')

const WELCOME_MESSAGE = 'Welcome to hastebot. Send me a code snippet as a message and I will give you the hastebin URL for that message.';

const sendMessage = async (chatId, text, res) => {
    try {
        const response = await messageService.sendMessage(chatId, text);
        console.log(`Message posted: ${text}`)
        res.send('ok');
    } catch (err) {
        console.log('Error :', err)
        res.send('Error :' + err)
    }
}

module.exports = function (app) {
    app.get('/hello', (req, res) => res.send("hello world"));

    app.post(`/${process.env.TELEGRAM_TOKEN}/new-message`, async function (req, res) {
        try {
            const { message } = req.body;
            console.log(message);

            if (!message || !message.chat || !message.text) {
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
                const entity = message.entities.find((value) => value.type === 'bot_command');
                if (message.text.length < entity.length - entity.offset + 1) {
                    text = 'Please add a code snippet after the command'
                } else {
                    const snippet = message.text.substring(entity.length - entity.offset + 1);
                    const response = await hasteService.createSnippet(snippet);
                    text = `https://www.hastebin.com/${response.data.key}`;
                }
                sendMessage(chatId, text, res);
                return;
            }



        } catch (err) {
            console.log(err);
        } finally {
            res.end();
        }
    })
}   
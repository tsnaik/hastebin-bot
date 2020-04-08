const messageService = require('../services/message.service')
const WELCOME_MESSAGE = 'Welcome to hastebot. Send me a code snippet as a message and I will give you the hastebin URL for that message.';
module.exports = function (app) {
    app.get('/hello', (req, res) => res.send("hello world"));

    app.post(`/${process.env.TELEGRAM_TOKEN}/new-message`, function(req, res) {
        const { message } = req.body;
        console.log(message);
      
        if (!message) {
          return res.end();
        }
      
        switch (message.text) {
            case '/start':
                messageService.sendMessage(WELCOME_MESSAGE);
                break;
            default:
                messageService.sendMessage(message.text);
                break;
        }
      })
}
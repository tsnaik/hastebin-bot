module.exports = function (app) {
    app.get('/hello', (req, res) => res.send("hello world"));

    app.post(`${process.env.TELEGRAM_TOKEN}/new-message`, function(req, res) {
        const { message } = req.body
      
        //Each message contains "text" and a "chat" object, which has an "id" which is the chat id
      
        if (!message || message.text.toLowerCase().indexOf('marco') < 0) {
          // In case a message is not present, or if our message does not have the word marco in it, do nothing and return an empty response
          return res.end()
        }
      
        // If we've gotten this far, it means that we have received a message containing the word "marco".
        // Respond by hitting the telegram bot API and responding to the approprite chat_id with the word "Polo!!"
        axios
          .post(
            `'https://api.telegram.org/${process.env.TELEGRAM_TOKEN}/sendMessage`,
            {
              chat_id: message.chat.id,
              text: 'Polo!!'
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
      })
}
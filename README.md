# Hastebin Telegram Bot
Simple [telegram](https://telegram.org/) bot for creating and sharing [Hastebin](https://github.com/seejohnrun/haste-server) snippets. [Give it a spin](https://telegram.me/hastebin_tsnaik_bot)
## Prerequisites
- [npm](https://www.npmjs.com/get-npm)

## Setup
- Install dependencies
  ```shell script
  $ npm install
  ```
- Create a file named **.env** in the project root with content:
  ```
  TELEGRAM_TOKEN=<your-unique-token>
  BOT_URL=https://b2c4a7b6.ngrok.io //replace this with your own URL
  ```
  - Use [ngrok](https://ngrok.com/) for testing on local server and set its url as BOT_URL
  - You can also specify a port. Default is 5000
    ```
    PORT=3000
    ```

## Run
```shell script
$ npm start
```

## Deploy
- Deployed on [Heroku](https://www.heroku.com/)
- [Set environment variables](https://devcenter.heroku.com/articles/config-vars) on Heroku
  |Variable        | Value                                              |
  |----------------|----------------------------------------------------|
  |TELEGRAM_TOKEN  | \<Your unique telegram token>                      |
  |BOT_URL         |\<server root> (e.g. https://hastebot.herokuapp.com)|

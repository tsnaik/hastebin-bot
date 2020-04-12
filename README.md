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
  ```
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
  |Variable        | Value                         |
  |----------------|-------------------------------|
  |TELEGRAM_TOKEN  | \<Your unique telegram token> |
- Don't forget to attach the [Webhook](https://core.telegram.org/bots/api#getting-updates) with your bot

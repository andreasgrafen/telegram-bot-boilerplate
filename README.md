# Bot Boilerplate

Quickly set up a simple Telegram bot with this boilerplate.
It comes complete with a command handler and an example command for you to play around with.

This is built on top of the [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api).

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)


### How to… ?

To add a command just create a file (`commandName.js`) inside the `commands` folder.
Inside this file you can do whatever you want as long as the return statement is in the given format:
```
return resolve({
  type:    'text', // [text, image, gif, audio, video]
  content: 'whatever' // the content the bot should send
})
```
Check out the /test command (`test.js`) for further explanation.

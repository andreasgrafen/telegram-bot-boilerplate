# Bot Boilerplate

Quickly set up a simple Telegram bot with this boilerplate.
It comes complete with a command handler and an example command for you to play around with.


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

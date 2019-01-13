// requirements
const TelegramBot = require('node-telegram-bot-api')

const config      = require('./config.js')
const message     = require('./messages/interactions.js')
const commands    = require('require-all')(__dirname + '/commands') // load all command files


// magic (aka creating the bot instance)
const bot         = new TelegramBot(config.token, {polling: true})



// function to actually send a response to the user
function send (chatId, result) {
  switch (result.type) {
    case 'image':
      bot.sendPhoto(chatId, result.content)
      break
    case 'gif':
    case 'video':
      bot.sendDocument(chatId, result.content)
      break
    case 'audio':
      bot.sendVoice(chatId, result.content)
      break  
    case 'markdown':
      bot.sendMessage(chatId, result.content, {parse_mode: 'Markdown'})
      break
    default: // this is text
      bot.sendMessage(chatId, result.content)
  }
}



bot.onText(/^\/([A-z]+)(.+)/g, (msg) => {

  const chatId  = msg.chat.id

  // handle the /start command
  if (msg.text === '/start') return send(chatId, {type: 'text', content: message.start})

  // handle every other command
  if (msg.text.startsWith(config.prefix) && !msg.from.is_bot) {

    const args    = msg.text.slice(config.prefix.length).split(/ +/)
    const command = args.shift()

    if (command in commands) {

      const runCommand = (args) => {
        return new Promise((res, rej) => {
          commands[command].execute(res, args)
        })
      }

      runCommand(args)
      .then(result => send(chatId, result))
      .catch(err => {
        console.log(err)
        send(chatId, {
          type: 'text',
          content: message.onError.failure
        })
      })

    }
    else {bot.sendMessage(chatId, message.onError.unknown)}

  }
})

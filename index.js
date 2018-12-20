const TelegramBot = require('node-telegram-bot-api')
const os = require('os')


const bot = new TelegramBot('651218681:AAGcgvE-9q9CNNI2zNLa1xExT9UgqHOuF8A', {polling: true})
bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Hello from ${os.type()}, bot says hi to "${msg.from.first_name}"`)
})
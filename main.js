const Discord = require("discord.js");
const intents = new Discord.IntentsBitField(3276799);
const config = require("./config");
const loader = require("./loader/loader");
const bot = new Discord.Client({intents});



bot.login(config.token);
loader(bot);


bot.on("messageCreate", async message => {
    if(message.content === '!register') return bot.commands.get('register').run(bot, message);

});

bot.on("ready", async() => {
    console.log("Bot is online");
});
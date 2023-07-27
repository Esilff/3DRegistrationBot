const Discord = require("discord.js");
const intents = new Discord.IntentsBitField(3276799);
const config = require("./resources/credentials.json");
const bot = new Discord.Client({intents});
const date = new Date();
const {registerUser} = require('./src/Commands/registration');
const open = require('./src/Commands/open');

const googleService = require('./src/gapi/connect');
let googleApiContext;

bot.login(config.discord.token);

bot.on("ready", async() => {
    console.log(`[${date.getHours()}:${date.getMinutes()}] : Connecting to Google API`);
    googleApiContext = await googleService.connectAPI('./resources/api_key.json');
    console.log(`[${date.getHours()}:${date.getMinutes()}] : Connection to Google API successfully made`);
    console.log(`[${date.getHours()}:${date.getMinutes()}] : Bot is online`);
});

bot.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName === 'register') {
        const firstName = interaction.options.get('name').value;
        const secondName = interaction.options.get('second-name').value;
        const promotion = interaction.options.get('class').value; //class is not authorized as a variable name
        let status = await registerUser(googleApiContext, config.sheet_id, interaction.user.id,firstName, secondName, promotion);
        interaction.reply(status);
    }
    if (interaction.commandName === 'add-open') {
        const user = interaction.options.get('user').value;
        const points = interaction.options.get('points').value;
        let status = await open.addOpenToUser(googleApiContext, config.sheet_id, user, points);
        console.log('Status :', status);
        interaction.reply(status);
    }
    if (interaction.commandName === 'stats') {
        let points = await open.getOpenPoints(googleApiContext, config.sheet_id, interaction.user.id);
        if (points < 0) {
            interaction.reply('The user is not registered');
            return;
        }
        console.log("Points :", points);
        const embedStatus = new Discord.EmbedBuilder().setTitle(interaction.user.username).setColor('Aqua').
        setAuthor({name: bot.user.username, iconURL: bot.user.displayAvatarURL()}).
        setThumbnail(interaction.user.displayAvatarURL()).
        addFields({name: 'Open points', value: `${points}pts`}).setTimestamp().
        setFooter({text: bot.user.username, iconURL: bot.user.displayAvatarURL()});
        interaction.reply({embeds: [embedStatus]});
    }
});

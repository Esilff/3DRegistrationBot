const {REST, Routes, ApplicationCommandOptionType } = require('discord.js');
const config = require("../resources/credentials.json");

const commands = [
  {
    name: 'register',
    description: 'register a new alumni to the association',
    options: [
      {
        name: 'name',
        description: 'The name of the applicant',
        type: ApplicationCommandOptionType.String,
        required: true
      },
      {
        name: 'second-name',
        description: 'The second name of the applicant',
        type: ApplicationCommandOptionType.String,
        required: true
      },
      {
        name: 'class',
        description: 'The class of the applicant',
        type: ApplicationCommandOptionType.String,
        required: true
      }
    ]
  },
  {
    name :'add-open',
    description: 'Add a given amount of open points to the mentionned user if registered',
    options: [
      {
        name: 'user',
        description: 'the user that will receive the points',
        type: ApplicationCommandOptionType.User,
        required: true
      },
      {
        name: 'points',
        description: 'the amount of points the user will receive',
        type: ApplicationCommandOptionType.Number,
        required: true
      }
    ]
  },
  {
    name: 'stats',
    description: 'Display the points of the user'
  }
];

const rest = new REST({version: '10'}).setToken(config.discord.token);

(async () => {
  try {
    console.log("Registering slash commands");
    await rest.put(
      Routes.applicationGuildCommands(config.discord.client_id, config.discord.guild_id),
      {
        body: commands,
      }
    );
    console.log("Slash commands registered successfully");
  } catch (error) {
    console.error(`[Error] : ${error}`);
  }
})();
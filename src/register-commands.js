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
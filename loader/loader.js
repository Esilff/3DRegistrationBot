const fs = require('fs');
const path = require

module.exports = async bot => {
    // fs.readdirSync("./commands").filter(f => f.endsWith('.js')).then(async file => {
    //     let command = require(`../commands/${file}`);
    //     if (!command.name || typeof command.name !== "string") throw new TypeError(`The command ${file.slice(0, file.length - 3)} has no name.`);
    //     bot.commands.set(command.name, command);
    //     console.log(`Command ${file} is successfully loaded.`);
    // });
    try {
        const files = await fs.promises.readdir("./commands");
        console.log("Files :", files);
        for (const file of files) {
            if (!file.endsWith('.js')) continue;
            const command = require(`../commands/${file}`);
            if (!command.name || typeof command.name != "string") {
                throw new Error(`[3DRegBot](Error) The command ${file.slice(0, file.length - 3)} has no valid name.`);
            }
            bot.commands.set(command.name, command);
            console.log(`[3DRegBot] : Command ${file} is successfully loaded.`);
        }
    } catch (error) {
        console.error(error);
    }
}
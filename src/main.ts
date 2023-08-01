import { RegistrationBot } from "./bot/registrationBot.js";

const main = async ()=> {
    const bot = new RegistrationBot();
    await bot.initialize("./resources/credentials.json", "./resources/api_key.json");
    
}

main();



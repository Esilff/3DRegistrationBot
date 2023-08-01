"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const registrationBot_js_1 = require("./bot/registrationBot.js");
const main = async () => {
    const bot = new registrationBot_js_1.RegistrationBot();
    await bot.initialize("./resources/credentials.json", "./resources/api_key.json");
};
main();

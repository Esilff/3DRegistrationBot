"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationBot = void 0;
const googleSheetService_js_1 = require("src/gapi/googleSheetService.js");
const fileReader_js_1 = require("../util/fileReader.js");
class RegistrationBot {
    credentials = JSON.parse("{}");
    date;
    googleSheetService;
    constructor() {
        this.date = new Date();
        this.googleSheetService = new googleSheetService_js_1.GoogleSheetService();
    }
    async initialize(crendentialsPath, googleAPIKey) {
        console.log(`[${this.date.getHours()}:${this.date.getMinutes()}] : Initializing the bot`);
        this.credentials = await (0, fileReader_js_1.readJSON)(crendentialsPath);
        console.log(`[${this.date.getHours()}:${this.date.getMinutes()}] : Initializing the GoogleAPI Context`);
        await this.googleSheetService.initialize(googleAPIKey);
    }
}
exports.RegistrationBot = RegistrationBot;
;

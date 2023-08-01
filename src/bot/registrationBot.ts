
import { GoogleSheetService } from "src/gapi/googleSheetService.js";
import { readJSON } from "../util/fileReader.js";



class RegistrationBot {
    private credentials : JSON = JSON.parse("{}");
    private date : Date;
    private googleSheetService : GoogleSheetService;
    
    constructor() {
        this.date = new Date();
        this.googleSheetService = new GoogleSheetService();
    }

    async initialize(crendentialsPath : string, googleAPIKey : string) : Promise<void> {
        console.log(`[${this.date.getHours()}:${this.date.getMinutes()}] : Initializing the bot`);
        this.credentials = await readJSON(crendentialsPath) as JSON;
        console.log(`[${this.date.getHours()}:${this.date.getMinutes()}] : Initializing the GoogleAPI Context`);
        await this.googleSheetService.initialize(googleAPIKey);
        
    }
};

export {RegistrationBot};
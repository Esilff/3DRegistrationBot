import { sheets_v4 } from "@googleapis/sheets";
import { GoogleAuth } from "google-auth-library";

const scope : string = "https://www.googleapis.com/auth/spreadsheets";

class GoogleSheetService {
    private _context : sheets_v4.Sheets | null = null;

    get context() : sheets_v4.Sheets | null{
        return  this._context;
    }

    async initialize(credentials : string) : Promise<void>{
        const auth : GoogleAuth = new GoogleAuth({
            keyFilename: credentials,
            scopes: scope
        });
        const client : any = await auth.getClient();
        this._context = new sheets_v4.Sheets({
            auth: client
        });
    }
}

export {GoogleSheetService};
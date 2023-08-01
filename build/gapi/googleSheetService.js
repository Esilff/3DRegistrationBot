"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleSheetService = void 0;
const sheets_1 = require("@googleapis/sheets");
const google_auth_library_1 = require("google-auth-library");
const scope = "https://www.googleapis.com/auth/spreadsheets";
class GoogleSheetService {
    _context = null;
    get context() {
        return this._context;
    }
    async initialize(credentials) {
        const auth = new google_auth_library_1.GoogleAuth({
            keyFilename: credentials,
            scopes: scope
        });
        const client = await auth.getClient();
        this._context = new sheets_1.sheets_v4.Sheets({
            auth: client
        });
    }
}
exports.GoogleSheetService = GoogleSheetService;

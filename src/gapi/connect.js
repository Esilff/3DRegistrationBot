const google = require('@googleapis/sheets');
const scope = 'https://www.googleapis.com/auth/spreadsheets';
const serviceVersion = 'v4';

async function connectAPI(credentials) {
    const auth = new google.auth.GoogleAuth({
        keyFilename: credentials,
        scopes: scope
    });
    const authClient = await auth.getClient();
    const context = google.sheets({
        version: serviceVersion,
        auth: authClient
    });
    return context;
}

module.exports = {
    connectAPI
};
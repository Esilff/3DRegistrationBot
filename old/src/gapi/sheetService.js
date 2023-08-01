const sheetService = {
    "write": async (context, spreadsheetId, range, value)=> {
        try {
            await context.spreadsheets.values.update({
                spreadsheetId: spreadsheetId,
                range: range,
                resource: {values: value},
                valueInputOption: 'USER_ENTERED'
            });
        } catch (error) {
            console.error('Unable to write in the spreadsheet :', err);
        }
    },
    "read": async (context, spreadsheetId, range) => {
        let sheet = await context.spreadsheets.values.get({
            spreadsheetId: spreadsheetId,
            range: range
        });
        return sheet.data.values;
    }
};

module.exports = {
    sheetService
}
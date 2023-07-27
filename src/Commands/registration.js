const {sheetService} = require('../gapi/sheetService');

async function registerUser(googleApiContext, spreadsheetId, discordId, firstName, secondName, className) {
    let values = await sheetService.read(googleApiContext, spreadsheetId, "Users");
    if (checkForExistingUser(values, discordId)) return 'User already exists';
    values.push([discordId, firstName, secondName, className, '0']);
    await sheetService.write(googleApiContext, spreadsheetId, "Users", values);
    return 'User successfully created';
}

function checkForExistingUser(values, discordId) {
    const user = values.filter(value => {
        return value[0] === discordId
    });
    return user.length > 0;
}

// function checkForExistingUser(googleApiContext, spreadsheetId, discordId) {
//     googleApiContext.spreadsheets.values.get({
//         s
//     })
// }

// function checkValidClassName() {

// }

module.exports = {
    registerUser
};
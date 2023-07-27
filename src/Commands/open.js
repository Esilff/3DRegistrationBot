const {sheetService} = require('../gapi/sheetService');

async function addOpenToUser(googleApiContext, spreadsheetId, userId, points) {
    let values = await sheetService.read(googleApiContext, spreadsheetId, "Users");
    let userExists = false;
    for (let i = 0; i < values.length; i++) {
        if (values[i][0] !== userId) continue;
        userExists = true;
        let val = Number(values[i][4]) + points;
        values[i][4] = val.toString();
    }
    if (userExists) {
        await sheetService.write(googleApiContext, spreadsheetId, "Users", values);
        console.log("Sheet is written anew");
    }
    return userExists ? 'Points successfully added' : 'The user is not registered';
}

module.exports = {
    addOpenToUser
}
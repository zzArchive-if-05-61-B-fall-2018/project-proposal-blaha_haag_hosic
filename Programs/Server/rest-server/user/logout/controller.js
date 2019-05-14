const model = require('./model');

function logoutAction(request, response) {
    jsonRequest = request.body;

    if(jsonRequest.username === undefined || jsonRequest.token === undefined) {
        console.log("Unvalid request: " + JSON.stringify(request.body));
        response.status(500).json('{"error": "Unvalid request"}');
        return;
    }

    console.log("Logout try from: " + jsonRequest.username);
    model.logout(jsonRequest.username, jsonRequest.token).then(function(result) {
        response.json(result);
        console.log("Logout succeeded");
    }, function(error) {
        response.status(500).json(error);
        console.log("Logout failed");
    });
} 

module.exports = {
    logoutAction,
};
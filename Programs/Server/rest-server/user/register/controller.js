const model = require('./model');

function registerAction(request, response) {
    jsonRequest = request.body;

    if(jsonRequest.username === undefined || jsonRequest.password === undefined) {
        console.log("Unvalid request: " + JSON.stringify(request.body));
        response.status(500).json({"error": "Unvalid request"});
        return;
    }

    model.registerUser(jsonRequest.username, jsonRequest.password).then(function(result) {
        console.log("Benutzer anglegt: " + JSON.stringify(result));
        response.json(result);
    }, function(error) {
        console.log("Benutzer konnte nicht angelegt werden: " + JSON.stringify(request.body));
        response.status(500).json(error);
    });
} 

module.exports = {
    registerAction,
};
const model = require('./model');

function registerAction(request, response) {
    jsonRequest = request.body;

    if(jsonRequest.username === undefined || jsonRequest.password === undefined) {
        console.log("Unvalid request: " + JSON.stringify(request.body));
        response.status(500).json({ error: "Unvalid request" });
        return;
    }

    model.registerUser(jsonRequest.username, jsonRequest.password).then(function(result) {
        response.json(result);
        console.log("Benutzer anglegt: " + result._id + " " + result.username);
    }, function(error) {
        console.log("Benutzer konnte nicht angelegt werden: ");
        response.status(500).json(error);
    });
} 

module.exports = {
    registerAction,
};
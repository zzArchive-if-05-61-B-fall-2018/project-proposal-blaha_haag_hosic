const model = require('./model');

function loginAction(request, response) {
    jsonRequest = request.body;

    if(jsonRequest.id === undefined || jsonRequest.password === undefined) {
        console.log("Unvalid request: " + JSON.stringify(request.body));
        response.status(500).json('{"error": "Unvalid request"}');
        return;
    }

    console.log("Login try from: " + jsonRequest.id);
    model.getToken(jsonRequest.id, jsonRequest.password).then(function(result) {
        response.json(result);
        console.log("Login succeeded");
    }, function(error) {
        response.status(500).json(error);
        console.log("Login failed");
    });
} 

module.exports = {
    loginAction,
};
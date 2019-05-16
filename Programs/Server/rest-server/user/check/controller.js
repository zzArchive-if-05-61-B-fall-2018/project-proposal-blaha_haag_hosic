const model = require('./model');

function checkIfUserExistsAction(request, response) {
    jsonRequest = request.body;

    if(jsonRequest.username === undefined) {
        console.log("Unvalid request: " + JSON.stringify(request.body));
        response.status(500).json('{"error": "Unvalid request"}');
        return;
    }
    username = jsonRequest.username;

    console.log("Username check for: " + username);
    
    model.checkIfUserExists(username).then(function(result) {
        response.json(result);
    }, function(error) {
        response.json(error);
    });
} 

module.exports = {
    checkIfUserExistsAction,
};
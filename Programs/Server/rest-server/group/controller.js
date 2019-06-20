const model = require('./model');

function createGroupAction(request, response) {
    const jsonRequest = request.body;
    console.log("DAS GEHT 1");
    if(jsonRequest.group === undefined || jsonRequest.group.owner === undefined || jsonRequest.token === undefined || jsonRequest.group.name === undefined ) {
        console.log("Unvalid request: " + JSON.stringify(request.body));
        response.status(500).json({error: "Unvalid request"});
        return;
    }
    console.log("DAS GETH 2");
    model.createGroup(jsonRequest.group.owner, jsonRequest.token, jsonRequest.group).then(function(result) {
        console.log(result);
        response.json(result);
    }, function(error) {
        console.log(error);
        response.status(550).json(error);
    });
}

function deleteGroupAction(request, response) {
    const jsonRequest = request.body;
    if(jsonRequest.username === undefined || jsonRequest.token === undefined || jsonRequest.groupname === undefined) {
        console.log("Unvalid request: " + JSON.stringify(request.body));
        response.status(500).json({error: "Unvalid request"});
        return;
    }
    model.deleteGroup(jsonRequest.username, jsonRequest.token, jsonRequest.groupname).then(function(result) {
        console.log(result);
        response.json(result);
    }, function(error) {
        console.log(error);
        response.status(550).json(error);
    });
}

function getGroupAction(request, response) {
    const jsonRequest = request.body;
    if(jsonRequest.username !== undefined && jsonRequest.token !== undefined){
        model.getGroup(jsonRequest.username, jsonRequest.token).then(function(result) {
            console.log(result);
            response.json(result);
        }, function(error) {
            console.log(jsonRequest.username + " tried to get all groups. Error: " + JSON.stringify(error));
            response.status(550).json(error);
        });
    } else {
        console.log("Unvalid request: " + JSON.stringify(request.body));
        response.status(500).json({error: "Unvalid request"});
    }
}

module.exports = {
    createGroupAction, deleteGroupAction, getGroupAction
};


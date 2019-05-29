const model = require('./model');

function createGroupAction(request, response) {
    const jsonRequest = request.body;
    if(jsonRequest.group === undefined || jsonRequest.group.owner === undefined || jsonRequest.token === undefined || jsonRequest.appointment.name === undefined ) {
        console.log("Unvalid request: " + JSON.stringify(request.body));
        response.status(500).json({error: "Unvalid request"});
        return;
    }
    model.createGroup(jsonRequest.group.owner, jsonRequest.token, jsonRequest.group).then(function(result) {
        console.log(result);
        response.json(result);
    }, function(error) {
        console.log(error);
        response.status(500).json(error);
    });
}

function deleteGroupAction(request, response) {
    const jsonRequest = request.body;
    if(jsonRequest.username === undefined || jsonRequest.token === undefined || jsonRequest.groupid === undefined) {
        console.log("Unvalid request: " + JSON.stringify(request.body));
        response.status(500).json({error: "Unvalid request"});
        return;
    }
    model.deleteGroup(jsonRequest.username, jsonRequest.token, jsonRequest.groupid).then(function(result) {
        console.log(result);
        response.json(result);
    }, function(error) {
        console.log(error);
        response.status(500).json(error);
    });
}

function addMemberAction(request, response) {
    const jsonRequest = request.body;
    if(jsonRequest.groupid === undefined || jsonRequest.username === undefined || jsonRequest.token === undefined || jsonRequest.membername === undefined) {
        console.log("Unvalid request: " + JSON.stringify(request.body));
        response.status(500).json({error: "Unvalid request"});
        return;
    }
    model.addMember(jsonRequest.username, jsonRequest.token, jsonRequest.groupid).then(function(result) {
        console.log(result);
        response.json(result);
    }, function(error) {
        console.log(error);
        response.status(500).json(error);
    });
}

function getGroupAction(request, response) {
    const jsonRequest = request.body;
    if(jsonRequest.groupname !== undefined){
        model.getGroup(jsonRequest.groupname).then(function(result) {
            console.log(jsonRequest.username + " got group " + jsonRequest.groupname);
            response.json(result);
        }, function(error) {
            console.log(jsonRequest.username + " tried to get all appointments. Error: " + JSON.stringify(error));
            response.json(error);
        });
    } else {
        console.log("Unvalid request: " + JSON.stringify(request.body));
        response.status(500).json({error: "Unvalid request"});
    }
}

module.exports = {
    createGroupAction, addMemberAction, deleteGroupAction, getGroupAction
};
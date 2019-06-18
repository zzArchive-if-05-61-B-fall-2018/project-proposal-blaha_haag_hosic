const model = require('./model');

function createAppointmentAction(request, response) {
    const jsonRequest = request.body;
    if(jsonRequest.appointment === undefined || jsonRequest.appointment.username === undefined || jsonRequest.token === undefined || jsonRequest.appointment.date === undefined || jsonRequest.appointment.duration === undefined || jsonRequest.appointment.name === undefined ) {
        console.log("Unvalid request: " + JSON.stringify(request.body));
        response.status(500).json({error: "Unvalid request"});
        return;
    }
    model.createAppointment(jsonRequest.appointment.username, jsonRequest.token, jsonRequest.appointment).then(function(result) {
        console.log(result);
        response.json(result);
    }, function(error) {
        console.log(error);
        response.status(500).json(error);
    });
}

function deleteAppointmentAction(request, response) {
    const jsonRequest = request.body;
    if(jsonRequest.username === undefined || jsonRequest.token === undefined || jsonRequest.appointmentid === undefined) {
        console.log("Unvalid request: " + JSON.stringify(request.body));
        response.status(500).json({error: "Unvalid request"});
        return;
    }
    model.deleteAppointment(jsonRequest.username, jsonRequest.token, jsonRequest.appointmentid).then(function(result) {
        console.log(result);
        response.json(result);
    }, function(error) {
        console.log(error);
        response.status(500).json(error);
    });
}

function editAppointmentAction(request, response) {
    const jsonRequest = request.body;
    const appointment = jsonRequest.appointment;
    if(appointment === undefined || appointment.username === undefined || jsonRequest.token === undefined || jsonRequest.appointmentId === undefined) {
        console.log("Unvalid request: " + JSON.stringify(request.body));
        response.status(500).json({error: "Unvalid request"});
        return;
    }
    model.editAppointment(appointment, appointment.username, jsonRequest.token, jsonRequest.appointmentId).then(function(result) {
        console.log(result);
        response.json(result);
    }, function(error) {
        console.log(error);
        response.status(500).json(error);
    });
}

function getAllAppointmentsFromUserAction(request, response) {
    const jsonRequest = request.body;
    if(jsonRequest !== undefined && jsonRequest.username !== undefined && jsonRequest.token !== undefined){
        model.getAllAppointmentsFromUser(jsonRequest.username, jsonRequest.token).then(function(result) {
            console.log(jsonRequest.username + " got all appointments.");
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
    createAppointmentAction, editAppointmentAction, deleteAppointmentAction, getAllAppointmentsFromUserAction
};
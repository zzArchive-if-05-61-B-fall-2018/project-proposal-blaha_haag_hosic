const User = require('../database/models/user/model');
const Appointment =  require('../database/models/appointment/model');

// Connect to database
require('../database/config');

function createAppointment(username, token, appointment) {
    return new Promise(function(resolve, reject) {
        User.findOne({username: username}, function(error, user) {
            if(error) {
                reject({error: "Could not create appointment", code: 580 });
            } else {
                if(user !== null && user.token === token && user.token !== null) {
                    const appointmentS = new Appointment(appointment);
                    appointmentS.save();
                    resolve(appointment);
                } else reject({error: "User or token is wrong", code: 560 });
            }
        });
    });
}

function deleteAppointment(username, token, appointmentId) {
    return new Promise(function(resolve, reject) {
        User.findOne( {username: username}, function(error, user) {
            if(error) {
                reject({error: "User or token is wrong", code: 560 });
            } else {
                if(user !== null && user.token === token && user.token !== null) {
                    Appointment.findOne({ username: username, _id: appointmentId }, function(error, result) {
                        if(error || result === null) {
                            reject({"error": "Could not delete appointment", code: 565});
                        } else {
                            Appointment.findByIdAndDelete(result._id, function(error, result) {
                                if(error) {
                                    reject(error);
                                } else {
                                    resolve({ result: "Deleted appointment"} );
                                }
                            });
                            
                        }
                    });
                } else reject({error: "User or token is wrong", code: 560 });
            }
        });
    });
}

function editAppointment(appointment, username, token, appointmentId) {
    return new Promise(function(resolve, reject) {
        User.findOne({username: username }, function(error, userResult) {
            if(error || userResult === null || userResult.token !== token || userResult.token === null) {
                reject({error: "User or token is wrong", code: 560 });
                return;
            } 
            Appointment.findById(appointmentId, function(error, appointmentResult) {
                if(error || appointmentResult === null) {
                    console.log(appointmentResult);
                    reject({error: "Could not edit appointment", code: 570 });
                } else {
                    if(appointment.name !== undefined)
                        appointmentResult.name = appointment.name;
                    if(appointment.duration !== undefined)
                        appointmentResult.duration = appointment.duration;
                    if(appointment.date !== undefined)
                        appointmentResult.date = appointment.date;
                    
                    appointmentResult.save();
                    resolve({result: "Edited appointment"});
                }
            });
        });
        
    });
}

function getAllAppointmentsFromUser(username, token) {
    return new Promise(function(resolve, reject) {
        User.findOne({username: username}, function(error, user) {
            if(error) {
                reject({error: "User or token is wrong", code: 560 });
            } else
            if(user !== null && user.token == token) {
                Appointment.find({ username: username }, function(error, appointments) {
                    if(error) {
                        reject({error: "Could not get appointments", code: 575 });
                    } else
                        resolve(appointments);
                });
            } else {
                reject({error: "User or token is wrong", code: 560 });
            }
        });
    });
}


module.exports = { createAppointment, deleteAppointment, editAppointment, getAllAppointmentsFromUser };
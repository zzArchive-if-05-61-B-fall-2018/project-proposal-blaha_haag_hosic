const User = require('../database/models/user/model');
const Appointment =  require('../database/models/appointment/model');

// Connect to database
require('../database/config');

function createAppointment(username, token, appointment) {
    return new Promise(function(resolve, reject) {
        User.findOne({username: username}, function(error, user) {
            if(error) {
                reject({error: error});
            } else {
                if(user !== null && user.token === token && user.token !== null) {
                    const appointmentS = new Appointment(appointment);
                    appointmentS.save();
                    resolve(appointment);
                } else reject({error: "Invalid token" });
            }
        });
    });
}

function deleteAppointment(username, token, appointmentId) {
    return new Promise(function(resolve, reject) {
        User.findOne( {username: username}, function(error, user) {
            if(error) {
                reject({error: "Appointment could not be deleted"});
            } else {
                if(user !== null && user.token === token && user.token !== null) {
                    Appointment.findOne({ username: username, _id: appointmentId }, function(error, result) {
                        if(error || result === null) {
                            reject("Could not delete appointment");
                        } else {
                            Appointment.findByIdAndDelete(result._id, function(error, result) {
                                if(error) {
                                    reject(error);
                                } else {
                                    resolve({ result: "deleted appointment"} );
                                }
                            });
                            
                        }
                    });
                } else reject({error: "Invalid token" });
            }
        });
    });
}

function editAppointment(appointment, username, token, appointmentId) {
    return new Promise(function(resolve, reject) {
        User.findOne({username: username }, function(error, userResult) {
            if(error || userResult === null || userResult.token !== token || userResult.token === null) {
                reject({error: "Could find the user"});
                return;
            } 
            Appointment.findById(appointmentId, function(error, appointmentResult) {
                if(error || appointmentResult === null) {
                    console.log(appointmentResult);
                    reject({error: "Could not edit appointment"});
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



module.exports = { createAppointment, deleteAppointment, editAppointment };
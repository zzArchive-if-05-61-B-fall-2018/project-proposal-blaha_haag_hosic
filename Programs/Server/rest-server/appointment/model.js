const mongoose = require('mongoose');
const appointmentSchema = require('../database/models/appointment/model');
const User = require('../database/models/user/model');
const Appointment =  mongoose.model('Appointment', appointmentSchema);

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
                reject({error: error});
            } else {
                if(user !== null && user.token === token && user.token !== null) {
                    Appointment.findByIdAndDelete(appointmentId, function(error, result) {
                        if(error || result.username !== username) {
                            reject(error);
                        } else {
                            resolve({ result: "deleted appointment"} );
                        }
                    });
                } else reject({error: "Invalid token" });
            }
        });
    });
}

function editAppointment(appointment, username, token) {
    return new Promise(function(resolve, reject) {
        User.findById(username, function(error, userResult) {
            if(error || userResult.token !== token || userResult.token === null) {
                reject(error);
                return;
            }
            Appointment.findByIdAndUpdate(appointmentId, {$set: appointment }, function(error, appointmentResult) {
                if(error || appointmentResult.username !== username) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
        
    });
}



module.exports = { createAppointment, deleteAppointment, editAppointment };
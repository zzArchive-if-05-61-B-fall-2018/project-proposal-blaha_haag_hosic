const User = require('../database/models/user/model');
const Group =  require('../database/models/group/model');

// Connect to database
require('../database/config');

function createGroup(username, token, group) {
    return new Promise(function(resolve, reject) {
        User.findOne({username: username}, function(error, user) {
            if(error) {
                reject({error: error});
            } else {
                if(user !== null && user.token === token && user.token !== null) {
                    const groupS = new Appointment(group);
                    groupS.save();
                    resolve(appointment);
                } else reject({error: "Invalid token" });
            }
        });
    });
}

function deleteGroup(username, token, groupId) {
    return new Promise(function(resolve, reject) {
        User.findOne( {username: username}, function(error, user) {
            if(error) {
                reject({error: "Group could not be deleted"});
            } else {
                if(user !== null && user.token === token && user.token !== null) {
                    Appointment.findOne({ username: username, _id: appointmentId }, function(error, result) {
                        if(error || result === null) {
                            reject("Could not delete Group");
                        } else {
                            Appointment.findByIdAndDelete(result._id, function(error, result) {
                                if(error) {
                                    reject(error);
                                } else {
                                    resolve({ result: "deleted group"} );
                                }
                            });
                            
                        }
                    });
                } else reject({error: "Invalid token" });
            }
        });
    });
}

function addMember(appointment, username, token, appointmentId) {
    return new Promise(function(resolve, reject) {
        User.findOne({username: username }, function(error, userResult) {
            if(error || userResult === null || userResult.token !== token || userResult.token === null) {
                reject({error: "Could not find the user"});
                return;
            } 
            Appointment.findById(appointmentId, function(error, appointmentResult) {
                if(error || appointmentResult === null) {
                    console.log(appointmentResult);
                    reject({error: "Could not add member"});
                } else {
                    if(appointment.name !== undefined)
                        appointmentResult.name = appointment.name;
                    if(appointment.duration !== undefined)
                        appointmentResult.duration = appointment.duration;
                    if(appointment.date !== undefined)
                        appointmentResult.date = appointment.date;
                    
                    appointmentResult.save();
                    resolve({result: "Added member"});
                }
            });
        });
        
    });
}

function getGroup(username, token) {
    return new Promise(function(resolve, reject) {
        User.findOne({username: username}, function(error, user) {
            if(error) {
                console.log(error);
                reject(error);
            } else
            if(user !== null && user.token == token) {
                
                Appointment.find({ username: username }, function(error, appointments) {
                    if(error) {
                        console.log(error);
                        reject(error);
                    } else
                        resolve(appointments);
                });
            } else {
                reject( {error: "Username or password is wrong" });
            }
        });
    });
}


module.exports = { createGroup, deleteGroup, addMember, getGroup };
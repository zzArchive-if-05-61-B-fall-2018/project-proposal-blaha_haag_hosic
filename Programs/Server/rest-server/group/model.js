const User = require('../database/models/user/model');
const Group =  require('../database/models/group/model');

// Connect to database
require('../database/config');

function createGroup(username, token, group) {
    return new Promise(function(resolve, reject) {
        User.findOne({username: username}, function(error, user) {
            if(error) {
                reject({error: "User or token is wrong", code: 560 });
            } else {
                if(user !== null && user.token === token && user.token !== null) {
                    const groupS = new Group(group);
                    groupS.save();
                    resolve(group);
                } else reject({error: "Invalid token" });
            }
        });
    });
}

function deleteGroup(username, token, groupId) {
    return new Promise(function(resolve, reject) {
        User.findOne( {username: username}, function(error, user) {
            if(error) {
                reject({error: "User or token is wrong", code: 560 });
            } else {
                if(user !== null && user.token === token && user.token !== null) {
                    Group.findOne({ name: groupId }, function(error, result) {
                        if(error || result === null) {
                            reject({error: "Could not delete group", code: 566 });
                        } else {
                            Group.findByIdAndDelete(result._id, function(error, result) {
                                if(error) {
                                    reject({error: "Could not delete group", code: 566});
                                } else {
                                    resolve({ result: "deleted group"} );
                                }
                            });
                            
                        }
                    });
                } else reject({error: "User or token is wrong", code: 560 });
            }
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
                
                Group.find({ owner: username }, function(error, groups) {
                    if(error) {
                        console.log(error);
                        reject({error: "No group was found", code: 568});
                    } else
                        resolve(groups);
                });
            } else {
                reject({error: "User or token is wrong", code: 560 });
            }
        });
    });
}


module.exports = { createGroup, deleteGroup, getGroup };
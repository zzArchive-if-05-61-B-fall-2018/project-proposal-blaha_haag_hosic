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
                    const groupS = new group(group);
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
                reject({error: "Group could not be deleted"});
            } else {
                if(user !== null && user.token === token && user.token !== null) {
                    Group.findOne({ username: username, _id: groupId }, function(error, result) {
                        if(error || result === null) {
                            reject("Could not delete Group");
                        } else {
                            Group.findByIdAndDelete(result._id, function(error, result) {
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

function addMember(group, username, token, groupId) {
    return new Promise(function(resolve, reject) {
        User.findOne({username: username }, function(error, userResult) {
            if(error || userResult === null || userResult.token !== token || userResult.token === null) {
                reject({error: "Could not find the user"});
                return;
            } 
            Group.findById(groupId, function(error, groupResult) {
                if(error || groupResult === null) {
                    console.log(groupResult);
                    reject({error: "Could not add member"});
                } else {
                    if(group.name !== undefined)
                        groupResult.name = group.name;
                    if(group.duration !== undefined)
                        groupResult.duration = group.duration;
                    if(group.date !== undefined)
                        groupResult.date = group.date;
                    
                    groupResult.save();
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
                
                group.find({ username: username }, function(error, groups) {
                    if(error) {
                        console.log(error);
                        reject(error);
                    } else
                        resolve(groups);
                });
            } else {
                reject( {error: "Username or password is wrong" });
            }
        });
    });
}


module.exports = { createGroup, deleteGroup, addMember, getGroup };
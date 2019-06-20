const User = require('../../database/models/user/model');

// Connect to database
require('../../database/config');

function logout(username, token) {
    return new Promise(function(resolve, reject) {
        User.findOne({username: username}, function(error, user) {
            if(error) {
                console.log("Invalid username");
                reject({error: "User or token is wrong", code: 560 });
            } else {
                if(token !== null && user.token === token) {
                    user.token = null;
                    user.save();
                    resolve( { result: "logout" });
                } else {
                    console.log("Invalid token");
                    reject({error: "User or token is wrong", code: 560 });
                }
            }
        });
    });
}

module.exports = { logout };
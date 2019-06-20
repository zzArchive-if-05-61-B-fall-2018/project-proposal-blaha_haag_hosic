const User = require('../../database/models/user/model');
require('../../database/config');

function checkIfUserExists(username) {
    return new Promise(function(resolve, reject) {
        User.findOne({ username: username}, function(error, result) {
            if(error) {
                reject(error);
            } else {
                if(result !== null)
                    reject({error: "User already exists", code: 505 });
                else {
                    resolve({ result: "Username is not in use" });
                }  
            }
        });
    });
}
module.exports = { checkIfUserExists };
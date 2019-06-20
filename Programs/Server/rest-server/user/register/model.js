const User = require('../../database/models/user/model');
const bcryp = require('bcrypt');
const saltRounds = 10;

// Connect to database
require('../../database/config');


function registerUser(username, password) {
    return new Promise(function(resolve, reject) {
        bcryp.hash(password, saltRounds, function(err, hash) {
            if(err) {
                reject({error: "Internal error", code: 0});
            } else {
                User.findOne({ username: username}, function(error, result) {
                    if(error) {
                        reject(error);
                    } else {
                        if(result !== null)
                        reject({error: "User already exists", code: 505 });
                        else {
                            let newUser = new User( { username: username, password: hash } );
                            newUser.save();
                            resolve({ username: newUser.username });
                        }
                            
                    }
                });
                
            }
        });
    });
}

module.exports = { registerUser };
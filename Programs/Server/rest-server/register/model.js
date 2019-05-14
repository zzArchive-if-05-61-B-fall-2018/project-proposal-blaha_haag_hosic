const mongoose = require('mongoose');
const User = require('../user/model');
const randtoken = require('rand-token');
const { userDatabase } = require('../config');
const bcryp = require('bcrypt');
const saltRounds = 10;

mongoose.connect(userDatabase, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("User Register conntected to db");
});

/*
* Erstellt einen User mit dem Passwort Wurst und dem Usernamen Hans
bcryp.hash("Wurst", saltRounds, function(err, hash) {
    if(err) {
        console.log(err);
    } else {
        let newUser = new User({ username: "Hans", password: hash });
        newUser.save();
        console.log("ID des erstellten Users: " + newUser._id);
    }
});
*/

function registerUser(username, password) {
    return new Promise(function(resolve, reject) {
        bcryp.hash(password, saltRounds, function(err, hash) {
            if(err) {
                reject(err);
            } else {
                let newUser = new User( { username: username, password: hash } );
                newUser.save();
                resolve({ _id: newUser._id, username: newUser.username });
            }
        });
    });
}

module.exports = { registerUser };
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
    console.log("Connected to database!");
});

/*
* Erstellt einen User mit dem Passwort Wurst und dem Usernamen Hans
bcryp.hash("Wurst", saltRounds, function(err, hash) {
    if(err) {
        console.log(err);
    } else {
        let newUser = new User({ name: "Hans", password: hash });
        newUser.save();
        console.log("ID des erstellten Users: " + newUser._id);
    }
});
*/

function generateToken() {
    let uid = randtoken.uid;
    let token = uid(16);
    return token;
}

function getToken(id, password) {
    const token = generateToken();
    return new Promise(function(resolve, reject) {
        User.findById(id, function(err, user) {
            if(err) {
                reject({error: "Invalid userid or password"});
            } else {
                const res = bcryp.compareSync(password, user.password);
                if(res && user._id == id) {
                    user.token = token;
                    user.save(); 
                    resolve({ token: user.token });
                } else reject({error: "Invalid userid or password"});
            }
        });
    });
}

module.exports = { getToken };
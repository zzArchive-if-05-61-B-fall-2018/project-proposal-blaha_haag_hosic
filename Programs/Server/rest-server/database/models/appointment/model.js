const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    name: String, 
    date: String, // später auf Date ändern! 
    duration: Number,
    username: String
});

module.exports = appointmentSchema;
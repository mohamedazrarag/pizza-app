const mongoose = require("mongoose");


var dbURL = "mongodb://localhost:27017/mern-pizza";


mongoose.connect(dbURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection

db.on('connected', () => {
    console.log('Database connected');
})

db.on('error', () => {
    console.log('connection error');
})

module.exports = mongoose
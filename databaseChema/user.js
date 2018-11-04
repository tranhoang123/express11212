const mongoose = require('mongoose');
//mongoose.connect("mongodb://localhost/myDatabase");

const userChema = new mongoose.Schema({
	username: String,
	password: String,
})

module.exports = userChema;
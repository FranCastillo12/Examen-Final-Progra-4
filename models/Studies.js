const mongoose = require('mongoose');
const { Schema } = mongoose;


//Propiedades que va a tener las notas
const Study_Structure = new Schema({
    School: { type: String, required: true},
    High: {type: String, required: true},
    University: { type: String, required: true},
    Extra: {type: String},
});


module.exports = mongoose.model('Study', Study_Structure);

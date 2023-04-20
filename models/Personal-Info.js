const mongoose = require('mongoose');
const { Schema } = mongoose;


//Propiedades que va a tener las notas
const Personal_Structure = new Schema({
    name: { type: String, required: true},
    email: {type: String, required: true},
    Age: { type: String, required: true},
    Country: {type: String, required: true},
    Number: {type: String, required: true},
    descrip: {type: String, required: true} 
});


module.exports = mongoose.model('Personal', Personal_Structure);

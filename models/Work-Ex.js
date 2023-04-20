const mongoose = require('mongoose');
const { Schema } = mongoose;


//Propiedades que va a tener las notas
const Work_Structure = new Schema({
    Work: { type: String, required: true}
});


module.exports = mongoose.model('Work', Work_Structure);

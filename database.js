const mongoose = require("mongoose");

require('dotenv').config({path: 'src/variables.env'});

mongoose.connect("mongodb+srv://castillof075:s2GzRhduDYzrOwYJ@cluster0.unszciv.mongodb.net/ExamenFinal?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(db => console.log('Conexion Exitosa!'))
.catch(err => console.error(err))
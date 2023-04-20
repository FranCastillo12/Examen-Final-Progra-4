const mongoose = require("mongoose");

//require('dotenv').config({path: 'src/variables.env'});
const DB = "mongodb+srv://castillof075:s2GzRhduDYzrOwYJ@cluster0.unszciv.mongodb.net/ExamenFinal?retryWrites=true&w=majority"
mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(db => console.log('Conexion Exitosa!'))
.catch(err => console.error(err))
const express = require('express');
//Modulo path
const path = require("path");
const methodOverride =  require('method-override');
const session =  require('express-session');

//Inicializacion
const app = express();
require('./database');

app.set('port',process.env.PORT || 3000) //Setting de app para el puerto
app.set("views",path.join(__dirname,'views'));

//Configuar el motor de las vistas
app.set("view engine","pug");



app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: false,
    saveUninitialized: false
}));

app.use(require('./routes/index'));
app.use(require('./routes/personalInfo'));
app.use(require('./routes/users'));


//Archivos Estaticos
app.use(express.static(path.join(__dirname,'public')));


//Incia el servidor

app.listen(app.get('port'),()=> {
    console.log("Servidor en el",app.get('port'))
    
    })



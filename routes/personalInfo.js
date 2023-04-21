const { text } = require('express');
const express = require('express');
const router = express.Router();


const Info = require('../models/Personal-Info');//Este require nos ayuda a decirle
const InfoStudy = require('../models/Studies');//Este require nos ayuda a decirle
const InfoWork = require('../models/Work-Ex');//Este require nos ayuda a decirle

router.get('/profil/New-Information',(req,res)=>{
    res.render('./New-data')
});

router.get('profil/personalInformation',(req,res)=>{
    res.render('./profile')
});


router.post('/New-dataPersonal',async(req, res)=>{
//Se obtiene los datos personales

const{name,email,Age,Country,Number,descrip} = req.body;
const errors = [];
if(!name){
    errors.push({Text: 'Plese write a title'});
}
if(!email){
    errors.push({Text: 'Please write a description'});
}

if(errors.length > 0){
    res.render('/New-data',{ errors });
//return;   
}else{

    const NewData = new Info({name,email,Age,Country,Number,descrip});
//await para decirle al sistema que la instruccion va a tomar un tiempo
//Para que siga haciendo las instrucciones que tiene abajo
    //NewData.user = req.user.id
    await NewData.save();
    //req.flash('mgs_success','Nota agregada');
    //res.redirect('/notes');
}
});


router.post('/New-dataStudies',async(req, res)=>{
    //Se obtiene los datos personales
    
    const{School,High,University,Extra} = req.body;
    const{Work} = req.body;
    const{name,email,Age,Country,Number,descrip} = req.body;

    const errors = [];
    if(!School){
        errors.push({Text: 'Plese write a title'});
    }
    if(!High){
        errors.push({Text: 'Please write a description'});
    }
    
    if(errors.length > 0){
        res.render('/New-data',{ errors });
    //return;   
    }else{
        const NewData = new Info({name,email,Age,Country,Number,descrip});
        const NewDataa = new InfoStudy({School,High,University,Extra});
        const NewDataaa = new InfoWork({Work});
        //await para decirle al sistema que la instruccion va a tomar un tiempo
    //Para que siga haciendo las instrucciones que tiene abajo
        //NewData.user = req.user.id
        await NewData.save();
        await NewDataa.save();
        await NewDataaa.save();
        req.flash('mgs_success','Nota agregada');
        res.redirect('/');
    }
    });
    router.post('/New-dataWork',async(req, res)=>{
        //Se obtiene los datos personales
        
        const{Work} = req.body;
        const errors = [];
        if(!Work){
            errors.push({Text: 'Plese write a title'});
        }  
        if(errors.length > 0){
            res.render('/New-data',{ errors });
        //return;   
        }else{
        
            const NewData = new InfoWork({Work});
        //await para decirle al sistema que la instruccion va a tomar un tiempo
        //Para que siga haciendo las instrucciones que tiene abajo
            //NewData.user = req.user.id
            await NewData.save();
            //req.flash('mgs_success','Nota agregada');
            //res.redirect('/notes');
        }
        });


    ///Recuperar la informacion de la base de datos
    router.get('/information',async(req, res)=>{
        const personal = await Info.find();
        const Studie = await InfoStudy.find();
        const Work = await InfoWork.find();
        res.render('./Profile', { personal,Studie,Work });
    });

module.exports = router;
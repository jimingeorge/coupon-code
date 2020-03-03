const mongoose = require('mongoose')


const setupDB = ()=>{
    mongoose.connect('mongodb+srv://jiminDB:jimindb@cluster0-3yifm.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true})
        .then(()=>{
            console.log('connected to DB')
        })
        .catch(err=>{
            console.log(err)
        })
}

module.exports=setupDB
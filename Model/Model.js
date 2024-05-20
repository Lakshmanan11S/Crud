const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    firstname:{
        type:String,
    },
    lastname:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    }
})

const result = new mongoose.model("user",schema)
module.exports=result
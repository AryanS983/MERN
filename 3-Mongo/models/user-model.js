const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

//DEFINE COLLECTION MODEL -> HERE COLLECTION IS User
//1 cluster contains multiple dbs | 1 db contains multiple collections
// cluster > db > collection > document

const USER = new mongoose.model("User", UserSchema)     
// keep the 1st letter of the collection name capital and keep it singular mongo make it plural on its own

//export the colllection model
module.exports = USER
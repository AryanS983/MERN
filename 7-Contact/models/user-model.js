const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    phone:{
        type:String,
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



// adding a new method/function to the userSchema class:-
UserSchema.methods.generateToken = async function(){
    try {
        return jwt.sign(
            {
                userID: this._id.toString(),        //This portion
                email: this.email,                  //is Payload
                isAdmin: this.isAdmin
            },
            process.env.JWT_SECRET_KEY,             //This is signature and could be anything
            {
                expiresIn: "1h"                    //Expiration
            }
        )
    } catch (error) {
        console.error(error);
        
    }
}

UserSchema.methods.comp = async function(pass){
    try {
        return await bcrypt.compare(pass, this.password)
    } catch (error) {
        console.log("hahalol");
    }
}


const USER = mongoose.model("User", UserSchema)    
// USER here is a model/class in terms of opps which has methods/functions to manipulate the db
// keep the 1st letter of the collection name capital and keep it singular mongo make it plural on its own

//export the colllection model
module.exports = USER



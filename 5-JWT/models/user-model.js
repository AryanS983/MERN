const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')


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
                expiresIn: "30d"                    //Expiration
            }
        )
    } catch (error) {
        console.error(error);
        
    }
}


const USER = mongoose.model("User", UserSchema)    
// USER here is a model/class in terms of opps which has methods/functions to manipulate the db
// keep the 1st letter of the collection name capital and keep it singular mongo make it plural on its own

//export the colllection model
module.exports = USER






/* JWT is a compact, secure token your server gives after login — 
and you use it to prove who you are when accessing private stuff.

How JWT Works (Step-by-step)

🔐 1. User Logs In
You verify their email and password.

🪪 2. Server Gives a JWT
jwt.sign({ userId: "123", name: "Aryan" }, secretKey)
It creates a token : eyJhbGciOi...<some_long_token>

🧳 3. User Stores the Token
Usually in localStorage or cookies

📬 4. User Sends JWT in Requests
Every time the user visits a protected route:

✅ 5. Server Verifies JWT
If the token is valid, the server lets them in. No need to log in again until it expires!


📦 What's Inside a JWT?
It has 3 parts, separated by dots:
HEADER.PAYLOAD.SIGNATURE

Header: says which algorithm is used (e.g., HS256)

Payload: the actual data, like:
{
  "userId": "123",
  "name": "Aryan",
  "role": "user",
  "exp": 1712354870
}
Signature: a secure hash to make sure nobody has tampered with it */

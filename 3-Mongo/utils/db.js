const mongoose = require('mongoose')

// const URI = "mongodb://127.0.0.1:27017/mern_admin"          //this is my local db using mongosh

const URI = process.env.MONGO_URI

const connectdb= async ()=>{
    try {
        await mongoose.connect(URI)             //await returns a promise
        console.log("connection sucesssfull");      // Connect to loacal db
    } catch (error) {
        console.log(error);
        process.exit(0)
    }
}

module.exports = connectdb
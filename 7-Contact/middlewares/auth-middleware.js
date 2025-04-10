const jwt = require('jsonwebtoken')
const User = require('../models/user-model')

const authMiddleware = async (req, res, next)=>{
    let token = req.header('Authorization')
    token = await token.replace("Bearer","").trim()

    if(!token){
        res.status(400).json({msg: "Invalid Token"})
    }
    try {
        const isVerified = jwt.verify(token, process.env.JWT_SECRET_KEY) 
        const userData = await User.findOne({email: isVerified.email}).select({password: 0})
        console.log(userData);
        
        req.data = userData
        req.userID = userData._id.toString()
        next()
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = authMiddleware
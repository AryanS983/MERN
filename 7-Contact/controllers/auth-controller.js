const User = require('../models/user-model')
const contact = require('../models/contact-model')
const bcrypt = require('bcryptjs')



const home = async (req, res)=>{
    try {
        res.status(200).send("Auth accessed by controllers")

    } catch (error) {
        console.log(error);
        
    }
}

const register = async (req, res)=>{
    try {
        const { username, phone, email, password } = req.body
        const userExists = await User.findOne({email:email})        // Whenever we use any db/crud operation we use await 

        if(userExists){
            res.status(400).json({"msg":"Fuck you... user already exists"});
        }else{
            const saltround = 10        // More the salt more complex the excryption
            const hashpassword = await bcrypt.hash(password,saltround)

            const newUser = await User.create({ username, phone, email, password:hashpassword })
            //newUser is the instance/object of the docment created using the User class
            // if the names of the variables are same as that of the names in the schema then pass, In this case thats true
            // Then we can simply weite the field names once like {username, email, .....}
            // we have to mention it explicitly like {usename:user, email: myemail......}
            // In this example hashpassword is variable name is not the same as the field name password so it is explicitly mentioned in line 27
            
            

            res.status(200).json(
                {
                    msg:"user data saved",
                    // token: await newUser.generateToken(),
                    userId: newUser._id.toString(),
                    userdata: newUser
                }
            )
        }
        
        console.log({message: req.body});              
              
    } catch (error) {
        console.log(error);
    }
}


const login = async (req, res)=>{
    try {
        const { email, password } = req.body
        const userExist = await  User.findOne({email})
        if(!userExist){
            res.status(401).json({msg:"user doesnot exist"})
        }
        
        // const match = await  bcrypt.compare(password, userExist.password)
        if(await userExist.comp(password)){
            const token= await userExist.generateToken()
            res.cookie("token", token, {
                httponly: true,
                sameSite: "Strict",
            })
            res.status(200).json(
                {
                    msg:"balle balle...",
                    token: token, 
                    Credentials:userExist
                }
            )
        }else{
            res.status(400).json({msg:"fuck yooooooo"})
        }

        console.log({message: req.body}); 
    
    } catch (error) {
        res.status(400).json({msg:"Laude...."})
    }
}

const contactUs = async (req, res)=>{
    try {
        const { username, email, message } = req.body
        const userExists = await contact.findOne({email:email})        // Whenever we use any db/crud operation we use await 

        if(userExists){
            userExists.message.push(message)
            await userExists.save()
            res.status(200).json({"msg":"User exits -> message saved"});
        }else{
            const newUser = await contact.create({ username, email, message: [message] })

            res.status(200).json(
                {
                    msg:"user data saved",
                    userId: newUser._id.toString(),
                    userdata: newUser
                }
            )
        }
        
        console.log({message: req.body});              
              
    } catch (error) {
        console.log(error);
    }
}


const user = async (req, res)=>{
    try {
        
        res.status(200).json({msg:req.data})
    } catch (error) {
        console.log(error);
        
    }
}




module.exports = { home, register, login, contactUs, user }

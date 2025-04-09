const User = require('../models/user-model')
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
        //findOne - finds the credentials of a user given the parameters match
        if(userExists){
            res.status(400).json({"msg":"Fuck you... user already exists"});
        }else{
            const saltround = 10        // More the salt more complex the excryption
            const hashpassword = await bcrypt.hash(password,saltround)
            //in order to check the password:-
            //await bcrypt.compare("Passsword by user", <hash-from-db>); //returns true or flase

            await User.create({ username, phone, email, password:hashpassword })
            // if the names of the variables are same as that of the names in the schema then pass, In this case thats true
            // Then we can simply weite the field names once like {username, email, .....}
            // we have to mention it explicitly like {usename:user, email: myemail......}
            // In this example hashpassword is variable name is not the same as the field name password so it is explicitly mentioned in line 27
            
            res.status(200).json(
                {msg:"user data saved",}
            )
        }
        
        console.log({message: req.body});               // Jo post req aaya usko log kar dia maine
        res.status(200).json({"userdata":req.body})        // jo post karega usko ye send karna hai (in this case postman)
    } catch (error) {
        console.log(error);
    }
}

module.exports = { home, register }

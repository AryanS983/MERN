const home = async (req, res)=>{
    try {
        res.status(200).send("Auth accessed by controllers")

    } catch (error) {
        console.log(error);
        
    }
}

const register = async (req, res)=>{
    try {
        console.log({message: req.body});               // Jo post req aaya usko log kar dia maine
        res.status(200).json({"Lund":req.body})        // jo post karega usko ye send karna hai (in this case postman)
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = { home, register }

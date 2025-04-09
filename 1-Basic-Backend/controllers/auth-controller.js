const home = async (req, res)=>{
    try {
        res.status(200).send("Auth accessed by controllers")

    } catch (error) {
        console.log(error);
        
    }
}

const register = async (req, res)=>{
    try {
        res.status(200).send("Welcome to register")
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = { home, register }

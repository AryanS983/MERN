
const adminMiddleware = (req, res, next)=>{
    try {
        if(req.data.isAdmin == true){
            next()
        }
        else{
            res.status(401).json({msg : "saale tu hai kon, Admin to na hai"})
            
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = adminMiddleware
const errorMiddleware = (err, req, res, next)=>{
    const status = err.status || 400
    const message = err.message || "Backend error"
    const extradetails = err.extradetails || "backend fuckup"
    // console.log("error-middleware used");
    
    res.status(status).json({message, extradetails})
}

module.exports = errorMiddleware            
// the functionality of error-middleware is demonstrated in validate-middleware
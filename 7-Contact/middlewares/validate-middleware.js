const validate = (schema) => async (req, res, next)=>{
    try {
        const parsebody = await schema.parseAsync(req.body)
        req.body=parsebody
        next()
    } catch (err) {
        const status = 400 
        const message = "An error occured"
        const extradetails = err.errors[0].message
        // res.status(400).json({msg: message})
        const error = {
            status,
            message,
            extradetails
        }
        next(error)

    }
}


module.exports = validate

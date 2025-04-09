const express = require ('express')
const router = express.Router()   
// const { home, register } = require("../controllers/auth-controller")
// every thing which is imported comes in form of object thats why When I tried to write const home = require(...) 
// it gave me an error when I tried to use home as it is and that home is a function and not an object
//Instead of importing every function individually we can use an object variable for it like this.
const authcontrollers = require("../controllers/auth-controller")

// router.get(('/'),(req, res)=>{
//     res.status(200).send("HElllo and welcome to auth section")
// })

// Another way to make get requests in a router is router.route()
router.route('/').get(authcontrollers.home)             // Referncing home and register using authcontrollers obj variable 
router.route('/register').get(authcontrollers.register)

module.exports = router
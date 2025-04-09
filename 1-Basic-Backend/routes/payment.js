const express = require ('express')
const router = express.Router()

router.get(('/payments'),(req, res)=>{
    res.status(200).send("HElllo and welcome to paymetns")
})

module.exports = router
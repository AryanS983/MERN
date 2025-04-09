const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    username: {type:String},
    email: {type: String},
    message: {type: [String]}
})

const contact = mongoose.model("Contact", contactSchema)

module.exports = contact
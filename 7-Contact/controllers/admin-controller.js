const contact = require('../models/contact-model')
const USER = require('../models/user-model')

const getallusers = async(req, res)=>{
    try {
        const users = await USER.find().select({password: 0})
        if(!users || users.length == 0){
            res.status(200).json({msg: "No users found"})
        }
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({msg: "unable to get users"})
    }
}

const getallcontacts = async(req, res)=>{
    try {
        const contacts = await contact.find()
        if(!contacts || contacts.length == 0){
            res.status(200).json({msg: "No users found"})
        }
        res.status(200).json(contacts)
    } catch (error) {
        res.status(400).json({msg: "unable to get users"})
    }
}

const deleteContactbyID = async(req, res)=>{
    try {
        const id = req.params.id
        await contact.deleteOne({_id:id})
        res.status(200).json({msg: "Contact Deleted"})
    } catch (error) {
        next(error)
    }
}

const deleteUserbyID = async(req, res)=>{
    try {
        const id = req.params.id
        await USER.deleteOne({_id: id})
        res.status(200).json({msg: "user deleted"})
    } catch (error) {
        next(error)
    }
}

const getUserbyID = async(req, res)=>{
    try {
        const id = req.params.id
        const data = await USER.findOne({_id: id},{password: 0})
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
}

const updateUserbyID = async(req, res)=>{
    try {
        const id = req.params.id
        const updatedUserData = req.body
        const data = await USER.updateOne({_id: id},{$set: updatedUserData})
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
}

module.exports = {getallusers,getallcontacts,deleteUserbyID, updateUserbyID, getUserbyID, deleteContactbyID } 
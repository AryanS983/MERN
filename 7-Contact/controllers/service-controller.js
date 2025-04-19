const service = require('../models/services-model')


const serviceController = async (req, res)=>{
    const services = await service.find()
    res.status(200).json(services);

}

module.exports = serviceController
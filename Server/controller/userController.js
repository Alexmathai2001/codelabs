const developerModel = require('../models/developerSchema')

module.exports = {
    login : (req,res) => {
        req.session.user = req.body.email
        res.json()
    },
    getdevprofile : async (req,res) => {
        const userinfo = await developerModel.find({dev_email : req.session.user})
        res.json(userinfo)
        console.log(userinfo);
    },
    getdevinfo : async (req,res) => {
        console.log(req.params.dev_id)
        const dev_info = await developerModel.find({dev_id : req.params.dev_id})
        console.log(dev_info)
        res.json(dev_info)
    }
}
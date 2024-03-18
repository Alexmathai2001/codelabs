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
    }
}
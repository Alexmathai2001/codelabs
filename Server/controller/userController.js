const developerModel = require('../models/developerSchema');
const { createSecretToken } = require('../utils/secretToken');

module.exports = {
    login : (req,res) => {
        req.session.user = req.body.email
        const token = createSecretToken(req.body.email);
			res.cookie("token", token, {
				withCredentials: true,
				httpOnly: false,
			});
        res.json({token : token})
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
    },
    editdev : async (req,res) => {
        console.log(req.body)
        await developerModel.findOneAndUpdate({dev_id : req.body.dev_id},{dev_name:req.body.dev_name,dev_role:req.body.dev_role,dev_bio : req.body.dev_bio})
        res.json()
    }
}
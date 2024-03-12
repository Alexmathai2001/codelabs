const mongoose = require('mongoose')

const developerSchema = new mongoose.Schema({
    dev_id : String,
    dev_name : String,
    dev_email : String,
    dev_bio : String,
    profile_picture : String
})

const developerModel = mongoose.model('developers',developerSchema)

module.exports = developerModel;
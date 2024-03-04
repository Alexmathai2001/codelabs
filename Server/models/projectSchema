const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title:String,
  project_id: Number,
  overview: String,
  screenshots:[String],
  features : String,
  thumbnail : String,
  live_link : String,
  category : String,
  project_link : String,
  publisher : String,
  price : String,
  status : String,
  published_date : Date,
  last_updated : Date,
  db_used : String,
  frameworks_used : String,
  views : Number,
  downloads : Number
})


  
  const projectModel = mongoose.model("projects", projectSchema);

  module.exports = projectModel;
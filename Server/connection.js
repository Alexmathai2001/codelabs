const mongoose = require('mongoose')

const connectdb = async () => {
  try {
    const connection = await mongoose.connect("mongodb://localhost:27017/codeLabs");
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};



module.exports = connectdb
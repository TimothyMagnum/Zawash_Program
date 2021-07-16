const mongoose = require('mongoose');
const workerSchema = new mongoose.Schema({
  fullname: {
    type: String,
    trim: true,
  },
  phoneNumber: {
    type: Number,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
  },
  date: {
    type: String,
    trim: true,
  },
  nationalId: {
    type: String,
    trim: true,
  },
  place:{
    type:String,
    trim:true,
  },
  zawashid:{
    type:String,
    trim:true
  }
});

module.exports = mongoose.model('Washer', workerSchema);
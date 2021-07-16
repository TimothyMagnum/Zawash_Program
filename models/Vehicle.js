const mongoose = require('mongoose');
const vehicleSchema = new mongoose.Schema({
  color: {
    type: String,
    trim: true,
  },
  numberPlate: {
    type: String,
    trim: true,
  },
  doa:{
    type: Date
  },
  package: {
    type: String,
    trim: true,
  },
  washer:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Washer'
  },
  make:{
    type:String,
    trim:true
  },
  
 packagePrice: {
  type: Number,
 }, 
 washerFee: {
 type: Number,
 }
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
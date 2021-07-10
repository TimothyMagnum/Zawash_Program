const mongoose = require('mongoose');
const workerSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  phonenumber: {
    type: Number,
    trim: true,
  },
});

module.exports = mongoose.model('Washer', workerSchema);
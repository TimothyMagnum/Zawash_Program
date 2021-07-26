const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const managerSchema = new mongoose.Schema({
  fullname: {
    type: String,
    trim: true,
    unique:true
  },
  username: {
    type: String,
    trim: true,
    unique:true
  },
  phonenumber: {
    type: Number
  },
  email: {
    type: String,
    trim: true,
  },
  password: {
    type: String
  } 
});

managerSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Manager', managerSchema);
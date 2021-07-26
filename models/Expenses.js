const mongoose = require('mongoose');
const ExpenseSchema = new mongoose.Schema({
  item: {
    type: String,
    trim: true,
  },
  amount: {
    type: Number,
    trim: true,
  },
  doe: {
    type: String,
  },
  toe:{
    type:String
  } 
});

module.exports = mongoose.model('Expenses', ExpenseSchema);
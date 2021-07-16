const mongoose = require('mongoose');
const ExpenseSchema = new mongoose.Schema({
  Item: {
    type: String,
    trim: true,
  },
  Amount: {
    type: Number,
    trim: true,
  },
  Date: {
    type: String,
  } 
});

module.exports = mongoose.model('Expenses', ExpenseSchema);
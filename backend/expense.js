const mongoose = require("mongoose");
const expense = new mongoose.Schema({
  _id:mongoose.Schema.Types.ObjectId,
  date: {
    type: Date,
  },
  amount:Number,
  head:String,
  tag:String,
  note:String
});

module.exports = mongoose.model("Expense", expense);
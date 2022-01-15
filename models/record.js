const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  categoryId: {
    type: Schema.Types.ObjectId, 
    ref: 'categories',
    required: true
  }
})

module.exports = mongoose.model('Record', recordSchema)
const mongoose = require('mongoose')
const Record = require('../record')

const records = require('./record.json').results

mongoose.connect('mongodb://localhost/expense-tracker')

const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})

// 連線成功
db.once('open', () => {
  Record.create(records)
  console.log('mongodb connected!')
})


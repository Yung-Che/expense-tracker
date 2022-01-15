const Record = require('../record')
const records = require('./record.json').results
const db = require('../../config/mongoose')


// 連線成功
db.once('open', () => {
  Record.create(records)
  console.log('done!')
})


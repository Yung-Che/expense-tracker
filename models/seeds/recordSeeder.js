const Record = require('../record')
const records = require('./record.json').results
const db = require('../../config/mongoose')

db.once('open', () => {
  Record.create(records)
  console.log('done!')
})


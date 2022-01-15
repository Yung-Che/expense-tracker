// 載入 express
const express = require('express')
const mongoose = require('mongoose')

const app = express()

// 設定連線mongodb
mongoose.connect('mongodb://localhost/expense-tracker')

const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})

// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})



// 設定路由
app.get('/', (req, res) => {
  res.send('HI')
})

// 設定port
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})
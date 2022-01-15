// 載入 express
const express = require('express')
const mongoose = require('mongoose')

const exphbs = require('express-handlebars')

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

// hbs 設定
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')


// 設定路由
app.get('/', (req, res) => {
  res.render('index')
})

// 設定port
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})
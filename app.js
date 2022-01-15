// 載入 express
const express = require('express')
const app = express()

// 設定路由
app.get('/', (req, res) => {
  res.send('HI')
})

// 設定port
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})
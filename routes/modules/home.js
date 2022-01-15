// 載入 express
const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

// 設定路由
router.get('/', async (req, res) => {
  const category = await Category.find().lean()
  Record.find()
    .lean()
    .sort({ _id: 'asc' })
    .then(records => res.render('index', { records, category }))
    .catch(error => console.log(error))
})



module.exports = router




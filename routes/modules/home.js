// 載入 express
const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

// 設定路由
router.get('/', (req, res) => {
  Record.find()
    .lean()
    .populate('categoryId')
    .sort({ _id: 'asc' })
    .then(records => {
      Category.find()
        .lean()
        .then(categories => res.render('index', { records, categories }))
    })
    .catch(error => console.log(error))
})



module.exports = router




// 載入 express
const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')
const record = require('../../models/record')
const moment = require('moment')

// 設定路由
router.get('/', async (req, res) => {
  const userId = req.user._id
  const category = await Category.find().lean()
  let totalAmount = 0
  Record.find({ userId })
    .lean()
    .sort({ _id: 'asc' })
    .then((records) => {
      records.forEach(record => {
        record.icon = category.find((item) => (item._id).equals(record.categoryId)).icon
        record.date = moment(record.date).format('YYYY/MM/DD')
        totalAmount = record.amount + totalAmount
      })
      res.render('index', { records, category, totalAmount })
    })
    .catch(error => console.log(error))
})

router.post('/', async(req, res) => {
  const userId = req.user._id
  const category = await Category.find().lean()
  const { categoryId } = req.body
  let totalAmount = 0
  Record.find({ userId, categoryId })
    .lean()
    .sort({ _id: 'asc' })
    .then((records) => {
      records.forEach(record => {
        record.icon = category.find((item) => (item._id).equals(record.categoryId)).icon
        record.date = moment(record.date).format('YYYY/MM/DD')
        totalAmount = record.amount + totalAmount
      })
      res.render('index', { records, category, totalAmount })
    })
    .catch(error => console.log(error))
})

module.exports = router




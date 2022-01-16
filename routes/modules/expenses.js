// 載入 express
const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')
const record = require('../../models/record')
const moment = require('moment')

// 新增
router.get('/new', async (req, res) => {
  const category = await Category.find().lean()
  return res.render('new', { category })
})

router.post('/', (req, res) => {
  const userId = req.user._id
  const name = req.body.name
  const date = req.body.date
  const amount = req.body.amount
  const categoryId = req.body.categoryId

  return Record.create({ name, date, amount, categoryId, userId })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// 修改
router.get('/:id/edit', async (req, res) => {
  const category = await Category.find().lean()
  const userId = req.user._id
  const _id = req.params.id
  return Record.findOne({ _id, userId })
    .lean()
    .then((record) => {
      record.date = moment(record.date).format('YYYY-MM-DD');
      category.find(item => (item._id).equals(record.categoryId)).selected = true
      res.render('edit', { record, category })
    })
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  const name = req.body.name
  const date = req.body.date
  const amount = req.body.amount
  const categoryId = req.body.categoryId
  return Record.findOne({ _id, userId })
    .then(record => {
      record.name = name,
        record.date = date,
        record.amount = amount,
        record.categoryId = categoryId
      return record.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// 刪除
router.delete('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Record.findOne({ _id, userId })
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router
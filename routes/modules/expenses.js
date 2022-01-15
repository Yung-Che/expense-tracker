// 載入 express
const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

// 新增
router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('/', (req, res) => {
  const name = req.body.name
  const date = req.body.date
  const amount = req.body.amount
  const categoryId = req.body.categoryId

  return Record.create({ name, date, amount, categoryId })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// 修改
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .lean()
    .then((record) => res.render('edit', { record }))
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  const name = req.body.name
  const date = req.body.date
  const amount = req.body.amount
  const categoryId = req.body.categoryId
  return Record.findById(id)
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
  const id = req.params.id
  return Record.findById(id)
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router
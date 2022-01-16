// 載入 express
const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')
const record = require('../../models/record')

// 設定路由
router.get('/', async (req, res) => {
  const userId = req.user._id
  const category = await Category.find().lean()
  Record.find({ userId })
    .lean()
    .sort({ _id: 'asc' })
    .then((records) => {
      records.forEach(record => {
        record.icon = category.find((item) => (item._id).equals(record.categoryId)).icon
      })
      res.render('index', { records, category })
    })
    .catch(error => console.log(error))
})



// router.get('/', async (req, res) => {
//   const userId = req.user._id
//   const category = await Category.find().lean()
//   Record.find({ userId })
//     .lean()
//     .sort({ _id: 'asc' })
//     .then((records) => {
//       records.forEach(record => {
//         record.icon = category.find((item) => (item._id).equals(record.categoryId)).icon
//       })
//       res.render('index', { records, category })
//     })
//     .catch(error => console.log(error))
// })


// router.post('/', (req, res) => {
//   const categoryForm = document.querySelector('#category-form')
//   // when category select element is changed, then submit categoryForm
//   function onCategoryListChanged(event) {
//     categoryForm.submit()
//   }

//   categoryList.addEventListener('change', onCategoryListChanged)
// })


module.exports = router




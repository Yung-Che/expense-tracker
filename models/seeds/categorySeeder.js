const Category = require('../category')
const categories = require('./category.json').results
const db = require('../../config/mongoose')


db.once('open', async () => {
  await Category.create(categories)
  console.log('done!')
  process.exit()
})
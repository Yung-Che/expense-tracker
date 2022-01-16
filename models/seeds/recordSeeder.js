const Record = require('../record')
const Category = require('../category')
const User = require('../user')
const users = require('./user.json').results
const records = require('./record.json').results
const categories = require('./category.json').results


if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}


const db = require('../../config/mongoose')
const { use } = require('passport')
const bcrypt = require('bcryptjs')




db.once('open', async () => {
  const category = await Category.find().lean()
  records.forEach(record => {
    record.categoryId = category.find(category => category.name === record.category)._id
  })
  const tasks = users.map(async (user) => {
    const { name, email, password, recordId } = user
    // 從所有紀錄中取得使用者個別的紀錄
    const userRecords = records.filter(record => recordId.includes(record.id))
    const hashPassword = await bcrypt.genSalt(10).then(salt => bcrypt.hash(password, salt))
    return User.create({ name, email, password: hashPassword })
      .then((user) => {
        userRecords.forEach(userRecord => {
          userRecord.userId = user._id,
            delete userRecords['id'],
            delete userRecords['category']
        })
        return Record.create(userRecords)
      })
  })
  Promise.all(tasks)
    .then(() => {
      console.log('done!')
      process.exit()
    })
})


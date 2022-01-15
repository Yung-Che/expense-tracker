const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

module.exports = app => {
  app.use(passport.initialize())
  app.use(passport.session())

  passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    user.findOne({ email })
      .then(user => {
        if (!user) {
          return done(null, false, { message: '此郵件尚未註冊！'})
        }
        if (user.password !== password) {
          return done(null, false, { message: '信箱或密碼不正確！'})
        }
        return done(null, user)
      })
      .catch(error => done(error, false))
  }))

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })
  passport.deserializeUser((id, done) => {
    user.findById(id)
      .lean()
      .then(user => done(null, user))
      .catch(error => done(error, null))
  })
}
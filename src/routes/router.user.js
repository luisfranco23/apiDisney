const passport = require('passport')
const { getAllUsers, role, register } = require('../services/services.users')
require('../auth/auth.middleware')(passport)

const router = require('express').Router()


router.route('/users')
    .get(getAllUsers)
    .post(register)

router.route('/rol')
    .post(passport.authenticate('jwt', {session: false}),role)




exports.router = router
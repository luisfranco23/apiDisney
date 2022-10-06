const { session } = require('passport')
const passport = require('passport')
const { getCharacters, newRegisterCharacter } = require('../services/service.characters')
const { getAllUsers, role, register } = require('../services/services.users')
require('../auth/auth.middleware')(passport)

const router = require('express').Router()


router.route('/users')
    .get(getAllUsers)
    .post(register)

router.route('/rol')
    .post(role) //passport.authenticate('jwt', {session: false})

router.route('/characters')
    .get(passport.authenticate("jwt", {session: false}), getCharacters)
    .post(passport.authenticate("jwt", {session: false}), newRegisterCharacter)




exports.router = router
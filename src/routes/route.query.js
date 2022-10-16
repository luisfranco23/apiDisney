const passport = require('passport')
const {seacrhQueryName } = require('../services/service.characters')
const { seacrhQuery, getUrl } = require('../services/service.movies')

const router = require('express').Router()

router.route('/seacrh/characters')
    .get(passport.authenticate("jwt", {session: false}), seacrhQueryName)

router.route('/search/movies')
    .get(passport.authenticate("jwt",  {session: false}),seacrhQuery)



module.exports = { router }
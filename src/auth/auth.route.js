const { loginUser } = require('./auth.service')

const route = require('express').Router()

route.post('/login', loginUser)


exports.route = route
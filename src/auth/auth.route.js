const { loginUser } = require('./auth.service')

const route = require('express').Router()

route.post('/users/login', loginUser)


exports.route = route
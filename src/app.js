const express = require('express')
const initModels = require('./models/initModels')
initModels()

const app = express()

//routes
const routerUsers = require('./routes/router.user').router
const routerauth = require('./auth/auth.route').route

app.use(express.json())


const PORT = process.env.PORT || 8000
const { db } = require('../utils/database')


db.authenticate()
.then(() => console.log('Database Authenticated'))
.catch((err) => console.log(err))

db.sync()
    .then(() => console.log('Database synced'))
    .catch(err => console.log(err))


app.use('/api/v1', routerUsers)
app.use('/api/v1',routerauth)


app.listen(PORT, () => {
 console.log(`Server runngin ${PORT}`)
})

const express = require('express')
const initModels = require('./models/initModels')
initModels()

const app = express()
const swaggerUi = require("swagger-ui-express")

//routes
const routerUsers = require('./routes/router.user').router
const routerauth = require('./auth/auth.route').route
const routerQuery = require('./routes/route.query').router
const routerMovies = require('./routes/router.movies').router

const swaggerDoc = require('./swagger.json')

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
app.use('/api/v1', routerQuery)
app.use('/api/v1', routerMovies)
app.use("/api/v1/documentation", swaggerUi.serve, swaggerUi.setup(swaggerDoc))


app.listen(PORT, () => {
 console.log(`Server runngin ${PORT}`)
})

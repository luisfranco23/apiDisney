const Users = require("./user.model")
const Role = require('./role.model')
const Gender = require("./gender.model")
const Movies = require("./movie.model")
const Characters = require("./characters.model")

const initModels = () => {
    Role.hasOne(Users)
    Users.belongsTo(Role)

    Gender.hasOne(Movies)
    Movies.belongsTo(Gender)

    Movies.hasOne(Characters)
    Characters.belongsTo(Movies)
}
module.exports = initModels
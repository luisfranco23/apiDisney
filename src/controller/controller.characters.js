const Characters = require("../models/characters.model");
const uuid = require('uuid')

const registerCharacter = async (data) => {
    const newCharacter = await Characters.create({
        id: uuid.v4(),
        nameCharacter: data.nameCharacter,
        age: data.age,
        urlImage: data.urlImage,
        weigth: data.weigth,
        history: data.history,
        movieId: data.movieId
    },{
        attributes: {
            exclude: ["createdAt", "updatedAt"]
        }
    })
    return newCharacter
}

const getAllCharacters = async () => {
    const data = await Characters.findAll({
        attributes: {
            exclude: ["createdAt","updatedAt","age","weigth","history","movieId"]
        }
    })
    return data
}


module.exports = {
    registerCharacter,
    getAllCharacters
}
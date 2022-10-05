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
    })
    return newCharacter
}


module.exports = {registerCharacter}
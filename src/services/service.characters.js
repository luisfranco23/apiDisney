const { registerCharacter, getAllCharacters } = require("../controller/controller.characters")



const newRegisterCharacter = (req, res ) => {
    const data = req.body
    if (data.nameCharacter || data.age || data.history) {
        registerCharacter(data)
        .then(response => {
            res.status(201).json({status: "succes", response})
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }else{
        res.status(400).json({message: "data is not exists, require: nameCharacter, age, urlImage, weigth,history"})
    }
}

const getCharacters = (req, res) => {
    getAllCharacters()
    .then(response => {
        res.status(200).json({length: response.length, response})
    })
    .catch(err => {
        res.status(400).json({status: "failed", err})
    })
}

module.exports = {
    newRegisterCharacter,
    getCharacters
}
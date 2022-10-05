const { registerCharacter } = require("../controller/controller.characters")



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

module.exports = {
    newRegisterCharacter
}
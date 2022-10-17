const { registerCharacter, getAllCharacters, updateCharacterById, getCharacterById, deleteCharacterById, seacrhName, seacrhAge, seacrhMovieId } = require("../controller/controller.characters")

const newRegisterCharacter = (req, res ) => {
    const data = req.body
    const image = 'http://' + req?.hostname + ':' + process.env.PORT + '/api/v1/uploads/' + req?.file?.filename 
    console.log(image)
    if (data.nameCharacter || data.age || data.history) {
        registerCharacter(data , image)
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

const getCharacter = (req, res) => {
    const id = req.params.id
    getCharacterById(id)
    .then(response => {
        res.status(200).json({status: "succes", response})
    })
    .catch(err => {
        res.status(400).json({status: "failed", err})
    })
}

const updateCharacter = (req, res) => {
    const id = req.params.id
    const data = req.body
    updateCharacterById(id, data)
    .then(response => {
        res.status(200).json({status: "succes", response})
    })
    .catch(err => {
        res.status(400).json({status: "failed", err})
    })
}

const deteleCharacter = (req, res) => {
    const id = req.params.id
    deleteCharacterById(id)
    .then(response => {
        res.status(200).json({status: "succes", response})
    })
    .catch(err => {
        res.status(400).json({status: "failed", err})
    })
}

const seacrhQueryName = (req, res) => {
    const name = req.query.name
    const age = req.query.age
    const movies = req.query.movies
    if (name != undefined) {
        seacrhName(name)
        .then(response => {
            res.status(200).json({status: "succes", response})
        })
        .catch(err => {
            res.status(400).json({status: "failed", err})
        })
    }else if (age != undefined) {
        seacrhAge(age)
        .then(response => {
            res.status(200).json({status: "succes", response})
        })
        .catch(err => {
            res.status(400).json({status: "failed", err})
        })
    }else if (movies != undefined) {
        seacrhMovieId(movies)
        .then(response => {
            res.status(200).json({status: "succes", response})
        })
        .catch(err => {
            res.status(400).json({status: "failed", err})
        })
    }
}

module.exports = {
    newRegisterCharacter,
    getCharacters,
    updateCharacter,
    getCharacter,
    deteleCharacter,
    seacrhQueryName
}
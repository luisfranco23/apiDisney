const { registerGender } = require("../controller/controller.gender")



const registerNewGender = (req, res) => {
    const data = req.body
    if (data.nameGender) {
        registerGender(data)
        .then(response => {
            res.status(201).json({status: "succes", response})
        })
        .catch(err => {
            res.status(400).json({message: err})
        })
    }else {
        res.status(400).json({message: "data is not exists, require: nameGender"})
    }
}


module.exports = {
    registerNewGender
}
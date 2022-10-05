const uuid = require('uuid')
const Gender = require('../models/gender.model')


const registerGender = async(data) => {
    const newGender = await Gender.create({
        id: uuid.v4(),
        nameGender: data.nameGender,
        urlImage: data.urlImage
    })
    return newGender
}



module.exports = {
    registerGender
}
const Movies = require('../models/movie.model')
const Characters = require('../models/characters.model')
const uuid = require('uuid')


const getAllMovies = async () => {
    const data = await Movies.findAll({
        attributes: {
           exclude : ["updatedAt", "createdAt", "genderId", "qualification"]
        }
    })
    return data
}

const createdNewMovie = async (data, image) => {
    const newMovie = await Movies.create({
        id: uuid.v4(),
        title: data.title,
        urlImage: image,
        creationDate: data.creationDate,
        qualification: data.qualification,
        genderId: data.genderId
    },{
        attributes : {
           exclude : ["updatedAt", "createdAt", "genderId"]
        }
    })
    return newMovie
}
const getMovieById = async (id) => {
    const movie = await Movies.findAll({
        where : {
            id
        },
        include : Characters,
        attributes : {
            exclude : ["updatedAt", "createdAt"]
         }
    })
    return movie
}


const updateMovieById = async (id, data) => {
    const movie = await Movies.update({
        title: data.title,
        urlImage: data.urlImage,
        creationDate: data.creationDate,
        qualification: data.qualification,
        genderId: data.genderId
    },{
        where: {
            id
        },
        attributes : {
            exclude : ["updatedAt", "createdAt"]
        }
    })
    return movie
}

const deleteMovie = async (id) => {
    const deleteM = await Movies.destroy({
        where: {
            id
        },
        attributes : {
            exclude : ["updatedAt", "createdAt"]
        }
    })
    return deleteM
}

const getByName = async (title) => {
    const result = await Movies.findOne({
        where: {
            title
        },
        attributes : {
            exclude : ["updatedAt", "createdAt"]
        }
    })
    return result
}

const getByGenre = async (gender) => {
    const result = await Movies.findOne({
        where: {
            genderId : gender
        },
        attributes : {
            exclude : ["updatedAt", "createdAt"]
        }
    })
    return result
}

const getMoviesAscDesc = async (order) => {
    const result = await Movies.findAll({
        order: [['title',order]],
        attributes : {
            exclude : ["updatedAt", "createdAt"]
        }
    })
    return result
}


module.exports = {
    getAllMovies,
    createdNewMovie,
    getMovieById,
    updateMovieById,
    deleteMovie,
    getByName,
    getByGenre,
    getMoviesAscDesc,
}
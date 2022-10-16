const { getAllMovies, createdNewMovie, getMovieById, updateMovieById, deleteMovie, getByName, getByGenre, getMoviesAscDesc, getUrlImage } = require("../controller/controller.movies")

const getMovies = (req, res) => {
    getAllMovies()
    .then(response => {
        res.status(200).json({status: "succes", response})
    })
    .catch(err => {
        res.status(400).json({status: "failed", err})
    })
}

const createdMovie = (req, res) => {
    const data = req.body
    const image = 'http://' + req?.hostname + ':' + process.env.PORT + '/api/v1/uploads/' + req?.file?.filename
    createdNewMovie(data, image)
    .then(response => {
        res.status(201).json({status: "succes", response})
    })
    .catch(err => {
        res.status(400).json({status: "failed", err})
    })
}

const getMovie = (req, res) => {
    const id = req.params.id
    getMovieById(id)
    .then(response => {
        res.status(200).json({response})
    })
    .catch(err => {
        res.status(400).json({status: "failed", err})
    })
}

const updateMovie = (req, res ) => {
    const id = req.params.id
    const data = req.body
    updateMovieById(id, data)
    .then(response => {
        res.status(200).json({status: "succes", response})
    })
    .catch(err => {
        res.status(400).json({status: "failed", err})
    })
}

const deleteMovieById = (req, res) => {
    const id = req.params.id
    deleteMovie(id)
    .then(response => {
        res.status(200).json({status: "succes", response})
    })
    .catch(err => {
        res.status(400).json({status: "failed", err})
    })
}

const seacrhQuery = (req, res) => {
    const title = req.query.name
    const gender = req.query.gender
    const order = req.query.order
    if (title != undefined) {
        getByName(title)
        .then(response => {
            res.status(200).json({status: "succes", response})
        })
        .catch(err => {
            res.status(400).json({status: "failed", err})
        })
    }else if ( gender != undefined) {
        getByGenre(gender)
        .then(response => {
            res.status(200).json({status: "succes", response})
        })
        .catch(err => {
            res.status(400).json({status: "failed", err})
        })
    }else if (order != undefined) {
        getMoviesAscDesc(order)
        .then(response => {
            res.status(200).json({status: "succes", response})
        })
        .catch(err => {
            res.status(400).json({status: "failed", err})
        })
    }
}

module.exports = {
    getMovies,
    createdMovie,
    getMovie,
    updateMovie,
    deleteMovieById,
    seacrhQuery,
}
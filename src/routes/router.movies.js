const passport = require('passport')
const { upload } = require('../../utils/multer')
const { registerNewGender } = require('../services/service.gender')
const { getMovies, createdMovie, getMovie, updateMovie, deleteMovieById } = require('../services/service.movies')

const router = require('express').Router()

router.route('/movies')
    .get(passport.authenticate("jwt", {session: false}),getMovies)
    .post(passport.authenticate("jwt", {session: false}), upload.single('image') ,createdMovie)

router.route("/movies/genders")
     .post(passport.authenticate("jwt",  {session: false}), upload.single('image'), registerNewGender)

router.route('/movies/:id')
    .get(passport.authenticate("jwt", {session: false}), getMovie)
    .patch(passport.authenticate("jwt", {session: false}), updateMovie)
    .delete(passport.authenticate("jwt", {session: false}), deleteMovieById)

module.exports = {router}
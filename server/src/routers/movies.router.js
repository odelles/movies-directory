const express = require('express');
const {
    httpGetMovieByTitle,
    httpGetMovies,
} = require('./movies.controller');

const moviesRouter = express.Router();

moviesRouter.get('/movies/title', httpGetMovieByTitle)
moviesRouter.get('/movies', httpGetMovies)

module.exports = moviesRouter;
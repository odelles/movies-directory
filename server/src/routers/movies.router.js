const express = require('express');
const {
    httpGetMovieByTitle,
} = require('./movies.controller');

const moviesRouter = express.Router();

moviesRouter.get('/movies', httpGetMovieByTitle)

module.exports = moviesRouter;
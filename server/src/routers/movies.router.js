const express = require('express');
const {
    httpGetMovieByName,
} = require('./movies.controller');

const moviesRouter = express.Router();

moviesRouter.get('/movies', httpGetMovieByName)

module.exports = moviesRouter;
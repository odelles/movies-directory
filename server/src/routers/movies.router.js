const express = require('express');
const {
    httpGetMovieByTitle,
    httpGetMovies,
    httpGetActionMovies,
    httpGetComedyMovies,
    httpGetThrillerMovies,
    httpGetRomanceMovies,
    httpGetAdventureMovies,
} = require('./movies.controller');

const moviesRouter = express.Router();

moviesRouter.get('/movies/title', httpGetMovieByTitle)
moviesRouter.get('/movies', httpGetMovies)
moviesRouter.get('/movies/action', httpGetActionMovies)
moviesRouter.get('/movies/adventure', httpGetAdventureMovies)
moviesRouter.get('/movies/romance', httpGetRomanceMovies)
moviesRouter.get('/movies/comedy', httpGetComedyMovies)
moviesRouter.get('/movies/thriller', httpGetThrillerMovies)

module.exports = moviesRouter;
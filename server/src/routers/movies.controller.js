const {
    getMovieByTitle,
    getMovies,
} = require('../models/movies.model')
async function httpGetMovieByTitle(req, res) {
    console.log(req.query);
    const title = req.query.title.toLowerCase()
    const movie = await getMovieByTitle(title);
    return res.status(200).json(movie)
}
async function httpGetMovies(req, res) {
    const movies = await getMovies();
    return res.status(200).json(movies);
}
module.exports = {
    httpGetMovieByTitle,
    httpGetMovies,
}
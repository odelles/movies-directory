const {
    getMovieByTitle,
    getMovies,
    findMovie,
} = require('../models/movies.model')
async function httpGetMovieByTitle(req, res) {
    console.log(req.query);
    const title = req.query.title
    if (!title) {
        return res.status(400).json({
            error: 'please provide a title'
        })
    }
    const movieExists = await findMovie(title)
    if (!movieExists) {
        return res.status(404).json({
            error: 'no movie with a given title found in our data-base'
        })
    }
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
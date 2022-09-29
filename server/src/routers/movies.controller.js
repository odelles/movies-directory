const {
    getMovieByTitle,
    getMovies,
    findMovie,
    getActionMovies,
    getAdventureMovies,
    getRomanceMovies,
    getComedyMovies,
    getThrillerMovies
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
async function httpGetActionMovies(req, res) {
    const actionMovies = await getActionMovies();
    return res.status(200).json(actionMovies);
}
async function httpGetAdventureMovies(req, res) {
    const adventureMovies = await getAdventureMovies();
    return res.status(200).json(adventureMovies);
}
async function httpGetRomanceMovies(req, res) {
    const romanceMovies = await getRomanceMovies();
    return res.status(200).json(romanceMovies);
}
async function httpGetThrillerMovies(req, res) {
    const thrillerMovies = await getThrillerMovies();
    return res.status(200).json(thrillerMovies);
}
async function httpGetComedyMovies(req, res) {
    const comedyMovies = await getComedyMovies();
    return res.status(200).json(comedyMovies);
}
module.exports = {
    httpGetMovieByTitle,
    httpGetMovies,
    httpGetActionMovies,
    httpGetAdventureMovies,
    httpGetComedyMovies,
    httpGetRomanceMovies,
    httpGetThrillerMovies,
}
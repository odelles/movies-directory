const {
    getMovieByTitle,
} = require('../models/movies.model')
function httpGetMovieByTitle(req, res) {
    console.log(req.query);
    const title = req.query.title
    const movie = getMovieByTitle(title);
    return res.status(200).json(movie)
}
module.exports = {
    httpGetMovieByTitle,
}
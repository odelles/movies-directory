const {
    getMovieByName,
} = require('../models/movies.model')
function httpGetMovieByName(req, res) {
    console.log(req.query);
    const name = req.query.name
    const movie = getMovieByName(name);
    return res.status(200).json(movie)
}
module.exports = {
    httpGetMovieByName,
}
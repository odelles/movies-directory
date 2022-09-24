const path = require('path');
const fs = require('fs');

const { parse } = require('csv-parse');
const Movies = require('./movies.mongo');

function loadMoviesData() {
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..', 'Data', 'v1-data', 'movies_metadata_1.csv'))
            .pipe(parse({
                columns: true,
            }))
            .on('data', (data) => {
                saveMovie(data);

            })
            .on('error', (error) => {
                console.log(error);
                reject(error);
            })
            .on('end', () => {
                resolve();
            });
    })
}
async function findMovie(title) {
    return await Movies.findOne({
        title: title
    });
}
async function getMovieByTitle(title) {
    return await Movies.find({ title: title.toLowerCase() }, '-_id -__v');
}
async function getMovies() {
    return await Movies.find({ rating: { $gte: 7 } }, '-_id -__v')
        .limit(30)
}
async function saveMovie(movie) {
    try {
        await Movies.updateOne({
            rating: movie.vote_average,
            title: movie.title.toLowerCase(),
            overview: movie.overview,
            genres: movie.genres,
            production_companies: movie.production_companies,
            poster: movie.poster,
            runtime: movie.runtime

        }, {
            rating: movie.vote_average,
            title: movie.title.toLowerCase(),
            overview: movie.overview,
            genres: movie.genres,
            production_companies: movie.production_companies,
            poster: movie.poster,
            runtime: movie.runtime

        }, {
            upsert: true
        })
    } catch (err) {
        console.log(`could not save movie ${err}`)
    }
}

module.exports = {
    getMovieByTitle,
    loadMoviesData,
    getMovies,
    findMovie,
}
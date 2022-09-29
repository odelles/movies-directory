const path = require('path');
const fs = require('fs');

const { parse } = require('csv-parse');
const Movies = require('./movies.mongo');

function loadMoviesData() {
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..', 'Data', 'movies_metadata_1.csv'))
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
        .limit(30);
}
async function getActionMovies() {
    return await Movies.find({ 'genres.name': 'Action' }, '-_id -__v')
        .limit(3);
}
async function getThrillerMovies() {
    return await Movies.find({ 'genres.name': 'Thriller' }, '-_id -__v')
        .limit(3);
}
async function getComedyMovies() {
    return await Movies.find({ 'genres.name': 'Comedy' }, '-_id -__v')
        .limit(3);
}
async function getRomanceMovies() {
    return await Movies.find({ 'genres.name': 'Romance' }, '-_id -__v')
        .limit(3);
}
async function getAdventureMovies() {
    return await Movies.find({ 'genres.name': 'Adventure' }, '-_id -__v')
        .limit(3);
}

async function saveMovie(movie) {
    try {
        await Movies.findOneAndUpdate({
            overview: movie.overview,
            rating: movie.vote_average,
            title: movie.title.toLowerCase(),
            poster: movie.poster,
            runtime: movie.runtime,
            genres: JSON.parse(movie.genres.replace(/'/g, '"')),

        }, {
            overview: movie.overview,
            rating: movie.vote_average,
            title: movie.title.toLowerCase(),
            poster: movie.poster,
            runtime: movie.runtime,
            genres: JSON.parse(movie.genres.replace(/'/g, '"')),

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
    getActionMovies,
    getAdventureMovies,
    getComedyMovies,
    getRomanceMovies,
    getThrillerMovies,
}
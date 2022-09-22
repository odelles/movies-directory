const path = require('path');
const fs = require('fs');

const { parse } = require('csv-parse');

const movies = [];
function loadMoviesData() {
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..', 'Data', 'movies_metadata.csv'))
            .pipe(parse({
                columns: true,
            }))
            .on('data', (data) => {
                movies.push(data);

            })
            .on('error', (error) => {
                console.log(error);
                reject(error);
            })
            .on('end', () => {
                console.log(movies.length);
                resolve();
            });
    })
}
function getMovieByTitle(title) {
    for (const movie of movies) {
        if (movie.title.toLowerCase() == title) {
            return movie;
        }
    }
}

module.exports = {
    getMovieByTitle,
    loadMoviesData,
}
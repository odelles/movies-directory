const mongoose = require('mongoose');
const genresSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})
const productionCompaniesSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})
const moviesSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    },
    runtime: {
        type: Number,
        required: true,
    },
    productionCompanies: [productionCompaniesSchema],
    genres: [genresSchema]


});
module.exports = mongoose.model('Movies', moviesSchema);
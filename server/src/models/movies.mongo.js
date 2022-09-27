const mongoose = require('mongoose');
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
    }

});
module.exports = mongoose.model('Movies', moviesSchema);
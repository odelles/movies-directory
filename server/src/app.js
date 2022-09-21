const path = require('path');

const cors = require('cors');
const morgan = require('morgan');
const express = require('express');

const moviesRouter = require('./routers/movies.router')


const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(morgan('combined'));
app.use(express.json());
app.use(moviesRouter);

module.exports = app;
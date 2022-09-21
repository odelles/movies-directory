const http = require('http')

require('dotenv').config();

// const { mongoConnect } = require('./services/mongo');
const App = require('./app');
const { loadMoviesData } = require('./models/movies.model');

const PORT = process.env.PORT || 8000;

const server = http.createServer(App);

async function startServer() {
    // await mongoConnect();
    await loadMoviesData();
    server.listen(PORT, () => {
        console.log(`listening on ${PORT}...`)
    })
}
startServer();
// Import dependencies
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// Import Routers

// Set up app server with imported dependencies
const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors());

// Set up app server with imported Routes

// For sanity, set up a response to a Get request to root
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// export the server app

module.exports = app;
// Nodemon is set to run index.js, so the entire app server will end up here;

// Import the server
const app = require("./api/server");

// Set up the port

const PORT = process.env.PORT || 6660;

// Listen to that port and display a sanity Console Log

app.listen(PORT, () => {
  console.log(`\n*** Running on port: ${PORT} ***\n`);
});

//Run app, then load http://localhost:port in a browser to see the output.

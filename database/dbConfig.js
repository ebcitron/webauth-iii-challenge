// Set up Knex sqlite3 Database

//Import Knex Dependency

const Knex = require("knex");

// Import Knex Configuration

const knexConfig = require("../knexfile.js");

// Export as knexConfig.development

module.exports = knex(knexConfig.development);

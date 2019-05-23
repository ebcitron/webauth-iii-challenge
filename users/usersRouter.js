//  Route for seeing users

// Import and Initialize router as an express router

const router = require('express').Router();

// Import and Initialize the Users Model and any Middleware

const Users = require('./usersModel');

//Create endpoint for retrieving data in json object

router.get('/', (req, res) => {
Users.find()
.than(users => {
    res.json(users);
})
.catch(error => {
    console.log('Catch Error: ', error)
    res.send(error));
});

// Export Router

module.exports = router;
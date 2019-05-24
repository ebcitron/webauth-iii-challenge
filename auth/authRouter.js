// Creates endpoints for interacting with the Database functions

// Import and Initialize router as an express Router

const router = require("express").Router();

// Import any other dependencies for authorization

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Import Querry functions from Database model

const Users = require("../users/usersModel");

// Write CRUD api Endpoints

router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10); // Creates password hash from user(req.body).password, and runs it 2 ^ n times, in this case n being 10
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      console.log("Catch Error", error);
      res.status(500).json(error);
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ message: `Welcome ${user.username}!`, token });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      console.log("Catch Error", error);
      res.status(500).json(error);
    });
});
router.delete('/', (req, res) =>
});

function generateToken(user) {
    const payload ={
        subject: user.id,
        username: user.username,
        };
        const options = {
            expiresIn: "1m"
        };
        return jwt.sign(payload, secrets.jwtSecret, options);
}

// Export the Auth Router

module.exports = router;
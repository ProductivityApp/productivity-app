const express = require('express');
const {newUsername,createUser} = require('../controllers/databaseController');
const router = express.Router();

router.post('/', createUser, (req, res) => {
  console.log(res.locals.userTasks);
  return res.status(200).json(res.locals.userTasks);
});

module.exports = router;
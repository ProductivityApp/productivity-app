const express = require('express');
const {newUsername,createUser} = require('../controllers/databaseController');
const router = express.Router();

router.post('/', createUser, (req, res) => {
  console.log(res.locals.userTasks);
  return res.sendStatus(200);
});

module.exports = router;
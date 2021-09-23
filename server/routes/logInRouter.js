const express = require('express');
const {validateUser,getUserTasks} = require('../controllers/databaseController');
const router = express.Router();


router.post('/', getUserTasks,(req, res) => {
  console.log(res.locals.user);
  return res.status(200).json(res.locals.user);
});

module.exports = router;
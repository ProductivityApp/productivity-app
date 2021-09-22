const express = require('express');
const {validateUser,getUserTasks} = require('../controllers/databaseController');
const router = express.Router();


router.post('/', getUserTasks,(req, res) => {
  return res.status(200).json({tasks: res.locals.userTasks});
});

module.exports = router;
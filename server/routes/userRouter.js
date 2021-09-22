const express = require('express');
const {addTask} = require('../controllers/databaseController');
const router = express.Router();

router.post('/', addTask, (req, res) => {
    return res.sendStatus(200);
  });

  module.exports = router;
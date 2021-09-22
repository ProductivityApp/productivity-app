const express = require('express');
const {getUserTasks,updateUserTasksDB} = require('../controllers/databaseController');
const router = express.Router();

router.put('/', updateUserTasksDB, (req, res) => {
    return res.status(200);
  });

  module.exports = router;
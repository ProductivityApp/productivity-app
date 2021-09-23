const express = require('express');
const {verifyPassword,getUserTasks} = require('../controllers/databaseController');
const router = express.Router();


router.post('/', getUserTasks,(req, res) => {
  if(res.locals.errorMessage){
    console.log(res.locals.errorMessage)
    return res.sendStatus(400);
  }
  return res.status(200).json(res.locals.user);
});

module.exports = router;
const express = require('express');
const {addTask, deleteTask, toggleTask} = require('../controllers/databaseController');
const router = express.Router();

// router.post('/addtask', addTask, (req, res) => {
//     return res.sendStatus(200);
//   });

router.post('/addtask', addTask, (req, res) => {
  return res.status(200).json({taskAdded: res.locals.taskAdded});
});

router.post('/deletetask', deleteTask, (req, res) => {
  return res.sendStatus(200);
})
router.post('/toggletask', toggleTask, (req, res) => {
  return res.sendStatus(200);
})

module.exports = router;
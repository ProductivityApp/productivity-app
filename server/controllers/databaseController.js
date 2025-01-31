const { json } = require('express');
// const fetch = require('node-fetch');
const databaseController = {};
const models = require('../models/user');

// creates a user in the database where username is equal to the value sent from the front end
// sends user's tasks back to front end, which will initially be a property 'task' with the value []
databaseController.createUser = async (req, res, next) => {
  try{
   const createUser = await models.User.create({ username: `${req.body.username}`, password: `${req.body.password}`, tasks: []});
   return next()
  }
  catch(error){
    return next({errorMessage: 'username already exists'})
  }
};

// gets a specified user (from req.body) and logs their task list in res.locals.userTasks
databaseController.getUserTasks = async (req, res, next) => {
    try {
      const user = await models.User.findOne({username: `${req.body.username}`});
      res.locals.user = user;
      return next();
    } catch (error) {
      return next({errorMessage: 'user is not validated'})
    }
};

// given a task list in res.locals.userTasks, adds a new task (from req.body) and updates the database with new information
databaseController.addTask = async (req, res, next) => {
  const filter = { username: `${req.body.username}`};
  const newTask = {taskName:req.body.task,isComplete:false}
  try {
    const user = await models.User.updateOne(filter,{$push:{tasks:newTask}}).exec();
    return next();
  } catch (error){
    return next({errorMessage:'error adding task'})
  }
};







module.exports = databaseController;
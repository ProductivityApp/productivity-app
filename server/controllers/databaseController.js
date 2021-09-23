const { json } = require('express');
const { model } = require('mongoose');
// const fetch = require('node-fetch');
const databaseController = {};
const models = require('../models/user');

// creates a user in the database where username is equal to the value sent from the front end
// sends user's tasks back to front end, which will initially be a property 'task' with the value []
databaseController.createUser = async (req, res, next) => {
  console.log('did we get to this route??')
  try{
   const createUser = await models.User.create({ username: `${req.body.username}`, password: `${req.body.password}`, tasks: []});
   console.log("createUser",createUser)
   return next()
  }
  catch(error){
    console.log(error);
    res.locals.errorMessage = {errorMessage: 'invalid username and/or password'}
    return next()
  }
};

// gets a specified user (from req.body) and logs their task list in res.locals.userTasks
databaseController.getUserTasks = async (req, res, next) => {
    try {
      const user = await models.User.findOne({username: `${req.body.username}`}).exec();
      console.log("getUserTasks",user);
      res.locals.user = user;
      return next();
    } catch (error) {
      return next({errorMessage: 'user is not validated'})
    }
};

// given a task list in res.locals.userTasks, adds a new task (from req.body) and updates the database with new information
databaseController.addTask = async (req, res, next) => {
  const filter = { username: `${req.body.username}`};
  const newTask = {taskName:req.body.taskName, isComplete:false}
  try {
    const user = await models.User.updateOne(filter,{$push:{tasks:newTask}}).exec();
    res.locals.taskAdded = newTask;
    return next();
  } catch (error){
    return next({errorMessage:'error adding task'})
  }
};

databaseController.deleteTask = async (req, res, next) => {
  const filter = { username: `${req.body.username}` };
  try {
    const user = await models.User.updateOne(filter, {$pull: {tasks: {taskName: `${req.body.task}`}}}).exec();
    // do we have to send back anything? KK
    return next();
  } catch (error) {
    return next({errorMessage: 'error deleting task'})
  }
};


databaseController.toggleTask = async (req, res, next) => {
  const filter = { username: `${req.body.username}` };
  try {
  // example from Stack Overflow:
  //   db.collection.update(
  //     { "videos.id": 2 },
  //     { "$set": { "videos.$.thumbnail" : "newThumbnail.jpg" } }
  //  ){tasks: {isComplete: `${!isComplete}`}}
  
  // find relevant user -- req.body.username ✅
  // find relevant task -- req.body.taskName ✅
  // update isComplete: ❌ -- work on in AM. SF/ JH 9.22 11:21PM
    // find out what it is now AND
    // change it to the opposite
    const user = await models.User.updateOne(filter, {$set: {"tasks.$.isComplete":}}).exec();
    // do we have to send back anything? KK
    return next();
  } catch (error) {
    return next({errorMessage: 'error deleting task'})
  }
};




module.exports = databaseController;
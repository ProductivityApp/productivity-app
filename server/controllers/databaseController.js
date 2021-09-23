const { json } = require('express');
//import bcrypt
const bcrypt = require('bcrypt')
// const fetch = require('node-fetch');
const databaseController = {};
const {User, Task} = require('../models/user');

// creates a user in the database where username is equal to the value sent from the front end
// sends user's tasks back to front end, which will initially be a property 'task' with the value []
databaseController.createUser = (req, res, next) => {

  console.log('did we get to this controller')
  // if (req.body.password.length < 5) {
  //   return next(res.locals.errorMessage = {errorMessage: 'Password must be five characters long'});
  // }
  //pw, salt, cb for success and error
  bcrypt.hash(req.body.password, 5, async (err, hash) => {
    try{
   const createUser = await User.create({ username: `${req.body.username}`, password: hash, tasks: []});

    return next()
    }
    catch(error){
      res.locals.errorMessage = {errorMessage: 'invalid username and/or password'}
      return next()
    }
  })
};

databaseController.verifyPassword = async (req, res, next) => {
  try {
    const userInfo = await User.findOne({username: `${req.body.username}`}).exec();
    const userHash = userInfo.password;
    console.log(userInfo, 'the password', userHash);
    bcrypt.compare(req.body.password, userHash, (err, result) => {
      console.log(result)
      if (result === false) {
        res.locals.errorMessage = {errorMessage: 'wrong password'};
        return next();
     }
    })
    return next()
  } catch (error) {
    return next({errorMessage: 'password controller screwedup'})
  }
}

// gets a specified user (from req.body) and logs their task list in res.locals.userTasks
databaseController.getUserTasks = async (req, res, next) => {
    try {
      const user = await User.findOne({username: `${req.body.username}`}).exec();
      // console.log("getUserTasks",user);
      res.locals.user = user;
      return next();
    } catch (error) {
      return next({errorMessage: 'user is not validated'})
    }
};

// given a task list in res.locals.userTasks, adds a new task (from req.body) and updates the database with new information
databaseController.addTask = async (req, res, next) => {
  const filter = { username: `${req.body.username}`};
  // const newTask = {taskName:req.body.taskName, isComplete:false}
  const newTask = await Task.create({taskName: req.body.taskName});
  console.log(newTask);
  // console.log('addTask', req.body);
  try {
    const user = await User.updateOne(filter,{$push:{tasks:newTask}}).exec();
    res.locals.taskAdded = newTask;
    return next();
  } catch (error){
    return next({errorMessage:'error adding task'})
  }
};

databaseController.deleteTask = async (req, res, next) => {
  const userToFind = { username: `${req.body.username}` };
  console.log(req.body);
  console.log(req.body.username);
  console.log(req.body.taskId);
  try {
    // const user = await models.User.updateOne(filter, {$pull: {tasks: {taskName: `${req.body.task}`}}}).exec();
    // do we have to send back anything? KK

  const user = await User.findOneAndUpdate(userToFind, { $pull: { tasks: {_id: req.body.taskId}}}, {new:true}).exec();
    console.log('DELETETASK', user);
    /*
    { username: string, password: string, tasks: [{}, {}, {}]}
    */
   
    return next();
  } catch (error) {
    console.log(error);
    return next({errorMessage: 'error deleting task'})  
  }
};

databaseController.toggleTask = async (req, res, next) => {
  const taskId = req.body.taskId;
  try {
    const task = await Task.findOne({_id: taskId}).exec();
    const newTask = await Task.findOneAndUpdate({_id: taskId},{$set: {isComplete: !task.isComplete}}, {new:true}).exec();
    console.log(newTask);
    return next();
  } catch (error) {
    return next({errorMessage: 'error toggling task'})
  }
};

module.exports = databaseController;
const { json } = require('express');
//import bcrypt
const bcrypt = require('bcrypt')
// const fetch = require('node-fetch');
const databaseController = {};
const {User, Task} = require('../models/user');

// creates a user in the database where username is equal to the value sent from the front end
// sends user's tasks back to front end, which will initially be a property 'task' with the value []
databaseController.createUser =  async (req, res, next) => {

  console.log('did we get to this controller')
  // if (req.body.password.length < 5) {
  //   return next(res.locals.errorMessage = {errorMessage: 'Password must be five characters long'});
  // }
  //pw, salt, cb for success and error
  bcrypt.hash(req.body.password, 5, (err, hash) => {
    try{
   const createUser =  User.create({ username: req.body.username, password: req.body.password, tasks: []});

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
    const {username, password} = req.body;
    const userInfo = await models.User.findOne({username});
    const hashedPass = userInfo.password;
    const compare = bcrypt.compare(password, hashedPass);

    if (!compare) throw Error('Incorrect username or password. Please try again.')
    
    console.log(`User: ${username} logged in`);
    res.locals.user = username; // for use in later middleWares
    next();
  } catch (error) {
    return next({
      log:'error caught in verifyPassword middleware',
      status:500,
      message:{err}
    });
  }
}

// gets a specified user (from res.locals (from previous req.body)) and logs their task list in res.locals.userTasks
databaseController.getUserTasks = async (req, res, next) => {
    try {
      const tasks = await User.findOne({username: req.body.username});
      // console.log("getUserTasks",user);
      res.locals.userTasks = tasks;
      return next();
    } catch (error) {
      return next({errorMessage: 'user is not validated'})
    }
};

// given a task list in res.locals.userTasks, adds a new task (from req.body) and updates the database with new information
databaseController.addTask = async (req, res, next) => {
  const filter = { username: req.body.username};
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
  const userToFind = { username: req.body.username };

  console.log(req.body);
  console.log(req.body.username);
  console.log(req.body.taskId._id);
  try {
    // const user = await models.User.updateOne(filter, {$pull: {tasks: {taskName: `${req.body.task}`}}}).exec();
    // do we have to send back anything? KK

  const user = await User.findOneAndUpdate(userToFind, { $pull: { tasks: {_id: req.body.taskId._id}}}, {new:true}).exec();
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
  console.log("hello")
  console.log (req.body);
  // const taskId = req.body.taskId;
  try {
    const task = await Task.findOne({_id: req.body.taskId._id});
    console.log(task);
    const isComplete = !task.isComplete;
    // const newComplete = !task.isComplete;
    console.log(`isComplete = ${isComplete}`);

    const updateTask = await models.User.updateOne({'tasks._id':ObjectId(`"${taskId}"`)}, {$set: {isComplete: newComplete}}).exec();
    // const updateComplete = await models.User.updateOne({'tasks._id':ObjectId(`"${taskId}"`)}, { $set:{isComplete: isComplete}}).exec();
    // do we have to send back anything? KK
    return next();
  } catch (error) {
    return next({errorMessage: 'error deleting task'})
  }
};



// const bcrypt = require('bcryptjs');
// apiController.createUser = async (req, res, next) => {
//   try {
//     console.log('tset')
//     const { username, password } = req.body;
//     const newUser = {
//       username,
//       password,
//     };
//     const user = await models.Users.findOne({ username });
//     if (user) return res.send('User already created').status(304);
//     await models.Users.create(newUser);
//     console.log(`User: ${username} signed up`);
//     res.locals.user = username;
//     return next();
//   } catch (err) {
//     console.log(err);
//     return next({
//       log: 'Express error handler caught in apiController.createUser middleware',
//       status: 500,
//       message: { err },
//     });
//   }
// };
// // function to verify user when the user tries to login
// apiController.verifyUser = async (req, res, next) => {
//   try {
//     const { username, password } = req.body;
//     const user = await models.Users.findOne({ username });
//     const hashedPW = user.password;
//     const compare = bcrypt.compareSync(password, hashedPW);
//     if (!compare) throw Error('Incorrect username or password. Please try again.');
//     console.log(`User: ${username} logged in`);
//     res.locals.user = username;
//     next();
//   } catch (err) {
//     next({
//       log: 'Express error handler caught in apiController.verifyUser middleware',
//       status: 500,
//       message: { err },
//     });
//   }
// };
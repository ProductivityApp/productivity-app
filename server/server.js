const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
//REQUIRED ROUTERS
const signUpRouter = require('./routes/signUpRouter')
const userRouter = require('./routes/userRouter')
const logInRouter = require('./routes/logInRouter')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all('/*',function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers","X-Requested-With");
  next();
});

const { json } = require('express');
const fs = require('fs');

//WTF IS THAT?
app.get('/', (req, res) => {
  console.log('hello app.get server side');
  res.sendStatus(200);
});

app.use('/signup', signUpRouter);

// when the frontend / user adds a new task, add it to the database
app.use('/addtask', userRouter);

// when user tries to log in, check to see user exists if user exists redirect to userProfile endpoint
app.use('/login', logInRouter);

app.use(express.static(path.resolve(__dirname, '../client')));

/**
 * configire express global error handler 
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */
app.use((err, req, res, next) => {
  console.log("did we reach error handler")
  const defaultErr = 
  {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred'}
  };
  const errorObj = Object.assign({},defaultErr, err);
  res.send(errorObj);
});

app.listen(port, () => {
  console.log(`listenening on port: ${port}`);
});

module.exports = app;

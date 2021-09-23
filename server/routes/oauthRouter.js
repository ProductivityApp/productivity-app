
const express = require('express');
const { getToken, startSession, connectToGitHub } = require('../controllers/oauthController');
const {validateUser,getUserTasks} = require('../controllers/databaseController');

const router = express.Router();
CLIENT_ID = 'be335b9f2347460e75ab';
CLIENT_SECRET = 'c96b97af3ea1820532618f7f50ffb201fc9ef222';

router.get('/oauth', (req, res, next) => {
  const url = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`;

  res.set("Access-Control-Allow-Origin", '*'); // update to match the domain you will make the request from
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT");

  return res.redirect(url);
});

router.get('/callback', getToken, (req, res) => {
  res.set("Access-Control-Allow-Origin", '*'); // update to match the domain you will make the request from
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT");
  return res.status(200).redirect('http://localhost:3000/')
  // return res.json({message: 'success', token: res.locals.token});
});


module.exports = router;
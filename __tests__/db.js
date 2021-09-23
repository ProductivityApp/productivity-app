// const fs = require('fs');
// const path = require('path');
// const db = require('../server/models/user');

// const {createUser} = require('../server/controllers/databaseController')


// beforeAll((done) => {
//     fs.writeFile(testJsonFile, JSON.stringify([]), () => {
//       db.reset();
//       done();
//     });
//   });

//   afterAll((done) => {
//     fs.writeFile(testJsonFile, JSON.stringify([]), done);
//   });

////////////////////////////////////////////////////////////

const {getUserTasks,createUser,addTask} = require('../server/controllers/databaseController');
const testDb = require('../server/models/testuser');
const user = require('../server/models/user');
console.log("hello from test file");

beforeAll(async () => await testDb.connect())
afterEach(async () => await testDb.clearDatabase())
afterAll(async () => await testDb.closeDatabase())
describe('database schema functionality tests', () => {
it('writes a new user to the database with valid input arguments', async done=>{
    let createUser = {};
    try{
        createUser = await user.User.create({ username: `testUsername`, password: `testPassword`, tasks: []}).exec();
       }
       catch(error){
        console.log("Should not reach error handler");
       }
       console.log(createUser);
       expect(createUser.username).toEqual(`testUsername`);
       done();
       
})
})
















//////////////////////////////////////////////
// const {getUserTasks,createUser,addTask} = require('../server/controllers/databaseController');
// const testDb = require('../server/models/testuser');
// const user = require('../server/models/user');
// const {MongoClient} = require('mongodb');


// describe('insert', () => {
//   let connection;
//   let db;

//   beforeAll(async () => {
//     connection = await MongoClient.connect(global.__MONGO_URI__, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     db = await connection.db();
//   });

//   afterAll(async () => {
//     await connection.close();
//   });
// });
//const {getUserTasks,createUser,addTask} = require('../server/controllers/databaseController');
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
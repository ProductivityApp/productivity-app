// const mongoose = require('mongoose');
// const {MongoClient} = require('mongodb');
// // const { useStore } = require('react-redux');

// let connection;
// let db;

// beforeAll(async () => {
//   connection = await MongoClient.connect(global.__MONGO_URI__);
//   db = await connection.db(global.__MONGO_DB_NAME__);
// });

// afterAll(async () => {
//   await connection.close();
//   await db.close();
// });

// it('writes a new user to the database with valid input arguments', async done=>{
//     const user = db.collection('users')
    
//     const testUser = {username: 'James', password: 'Cross'}
//     await user.insertOne(testUser);

//     const insertedUser = await user.findOne({username: 'James'});
//     expect(insertedUser).toEqual(testUser)

//     })

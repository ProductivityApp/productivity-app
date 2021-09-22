// connecting to mongoDB database
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MONGO_URI = 'mongodb+srv://hpersau000:NoBiyvc2OOrhz27k@cluster0.ozszm.mongodb.net/Cluster0?retryWrites=true&w=majority';
mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'productivityApp', // name of database on mongoDB I created
});

  // used to create models

const userSchema = new Schema({
    username: {type: String, required:true, unique:true}, //{unique: true}? 
    password: {type: String, required:true},
    tasks: {type: Array, required:true}, //an array?
    // isCompleted: Boolean,
});

const User = mongoose.model('User',userSchema);

module.exports = {User};

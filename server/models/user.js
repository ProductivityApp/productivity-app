// connecting to mongoDB database
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const MONGO_URI = 'mongodb+srv://hpersau000:NoBiyvc2OOrhz27k@cluster0.ozszm.mongodb.net/Cluster0?retryWrites=true&w=majority';
const MONGO_URI = 'mongodb+srv://janilya:FStDArOC5Poh6oFR@cluster0.ziwih.mongodb.net/productivityapp?retryWrites=true&w=majority';
mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

  // used to create models

const userSchema = new Schema({
    username: {type: String, required:true, unique:true, minLength:1}, 
    password: {type: String, required:true, minLength:1},
    tasks: {type: Array, required:true}, 
    
});

const User = mongoose.model('User',userSchema);

module.exports = {User};

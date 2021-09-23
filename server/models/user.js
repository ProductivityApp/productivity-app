// connecting to mongoDB database
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const MONGO_URI = 'mongodb+srv://hpersau000:NoBiyvc2OOrhz27k@cluster0.ozszm.mongodb.net/Cluster0?retryWrites=true&w=majority';
const MONGO_URI = 'mongodb+srv://janilya:B2jq25VGWgHiT1Do@cluster0.ziwih.mongodb.net/productivityapp?retryWrites=true&w=majority';
mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

  // used to create models
  const taskSchema = new Schema({
    taskName: {type: String, required: true},
    isComplete: {type: Boolean, required: true, default:false}
  });


const userSchema = new Schema({
  username: {type: String, required:true, unique:true, minLength:1}, 
  password: {type: String, required:true, minLength:1},
  tasks: [
    // { task_id: {type: Schema.Types.ObjectId, ref: 'task'} } 
    taskSchema
  ] 
});



const User = mongoose.model('user', userSchema);
const Task = mongoose.model('task', taskSchema);

module.exports = {User, Task};

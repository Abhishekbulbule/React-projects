const mongoose = require('mongoose');
// const {Schema} = mongoose;
//first user schema creation
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
});
//setting user model with userSchema and exporting the model
const User=mongoose.model('users', userSchema);
module.exports=User;
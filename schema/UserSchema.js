const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    fname: String,
    lname: String,
    email: String,
    mobile: String,
    password: String,
  },
  {
    versionKey: false,  
  }
);

module.exports = mongoose.model('user', UserSchema);

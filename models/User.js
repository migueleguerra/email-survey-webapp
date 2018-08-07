const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  googleID: String
});

mongoose.model('users', UserSchema);

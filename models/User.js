var mongoose = require('mongoose');
var shortid = require('shortid');

var userSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: shortid.generate,
    retries: 4  // Four retries on collision
  },
  github_id: {
    type: String,
    required: false,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  bio: {
    type: String,
    required: false
  },
  type: { // Not making this a boolean in case we want to add moderators or other permission levels later
    type: String, // normal or admin
    required: true
  },
  created: Date,
  logins: Number
});

userSchema.pre('save', (next) => {
  if (!this.created) {
    this.created = new Date();
  }
  next();
});

module.exports = mongoose.model('User', userSchema);
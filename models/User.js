var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  github_id: {
    type: String,
    required: true,
    unique: true
  },
  bio: {
    type: String,
    required: true
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
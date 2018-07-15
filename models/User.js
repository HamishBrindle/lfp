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
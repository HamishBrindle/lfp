var mongoose = require('mongoose');

var User = require('../models/User');

var commentSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  created: Date
});

commentSchema.pre('save', (next) => {
  if (!this.created) {
    this.created = new Date();
  }
  next();
});

module.exports = mongoose.model('Comment', commentSchema);
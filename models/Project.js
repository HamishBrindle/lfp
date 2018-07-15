var mongoose = require('mongoose');

var User = require('../models/User');

var projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  created: Date
});

projectSchema.pre('save', (next) => {
  if (!this.created) {
    this.created = new Date();
  }
  next();
});

module.exports = mongoose.model('Project', projectSchema);
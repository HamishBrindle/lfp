var mongoose = require('mongoose');

var linkSchema = new mongoose.Schema({
  site: { // github, trello, slack, etc
    type: String,
    required: true
  },
  path: { // lfp/lfp, facebook/react, etc
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Link', linkSchema);
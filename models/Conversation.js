const mongoose = require('mongoose');

const ConversationSchema = new mongoose.Schema({
  context: {
    type: String,
    required: true,
  },
  response: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Conversation', ConversationSchema);

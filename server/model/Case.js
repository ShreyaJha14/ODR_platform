const mongoose = require('mongoose');

const CaseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'in_mediation', 'resolved'],
    default: 'pending'
  },
  plaintiff: {
    name: String,
    email: String
  },
  defendant: {
    name: String,
    email: String
  },
  messages: [{
    sender: String,
    content: String,
    timestamp: {
      type: Date,
      default: Date.now
    }
  }],
  evidence: [{
    title: String,
    description: String,
    fileUrl: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Case', CaseSchema);
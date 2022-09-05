const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  priority: {
    type: String,
    default: 'Low',
    enum: ['Low', 'Medium', 'High'],
  },
  modified: {
    type: Date,
    default: Date.now,
  },
  isPinned: {
    type: Boolean,
    default: False,
  },
  categoryColor: {
    type: String,
    default: '',
    enum: ['#FF6663', '#FEB144', '#FDFD97', '#9EE09E', '#9EC1CF', '#CC99C9' ],
  }
})

module.exports = mongoose.model('Todo', TodoSchema)

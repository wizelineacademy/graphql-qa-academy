const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    todo: String,
    status: String,
    project: { type: mongoose.Schema.Types.ObjectId, ref:'Project' },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref:'Comment' }]
});

const TodoModel = mongoose.model('Todo', TodoSchema);

module.exports = TodoModel;
const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    todo: String,
    status: String
});

const TodoModel = mongoose.model('Todo', TodoSchema);

console.log('TodoModel', typeof TodoModel);

module.exports = TodoModel;
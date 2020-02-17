const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    text: String,
    todo: { type: mongoose.Schema.Types.ObjectId, ref:'Todo' }
});

const CommentModel = mongoose.model('Comment', CommentSchema);

module.exports = CommentModel;
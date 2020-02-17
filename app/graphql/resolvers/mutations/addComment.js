const { TodoModel, CommentModel } = require('../../../models');

module.exports = async (parent, { comment }) => {
    let todoById;
    try {
        todoById = await TodoModel.findById(comment.todoId);
    } catch (e) {
        throw new Error('Todo not found');
    }

    const newComment = new CommentModel({
        text: comment.text,
        todo: comment.todoId
    });

    await newComment.save();

    todoById.comments.push(newComment);
    await todoById.save();

    return newComment
}
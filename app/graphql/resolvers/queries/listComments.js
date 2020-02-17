const { TodoModel } = require('../../../models');

module.exports = async (parent, { todoId }) => {
    try {
        const todo = await TodoModel.findById(todoId).populate('comments');

        return todo.comments;
    } catch (e) {
        throw new Error('Error fetching comments data')
    }
}

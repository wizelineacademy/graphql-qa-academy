const { TodoModel, CommentModel } = require('../../../models')

module.exports = async (parent, { todoId }) => {
    try {
        await TodoModel.deleteOne({ '_id': todoId })
        await CommentModel.deleteMany({ 'todo': todoId })
    } catch (e) {
        throw new Error('Todo not found')
    }

    return true
}
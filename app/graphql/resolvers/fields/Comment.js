const { TodoModel } = require('../../../models')

module.exports = {
    todo: async (comment) => {
        const todo = await TodoModel.findById(comment.todo)
        return todo
    },
}
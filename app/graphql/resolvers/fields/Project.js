const { TodoModel } = require('../../../models')

module.exports = {
    todos: async (project) => {
        const todos = await TodoModel.find({ project: project.id })
        return todos
    }
}

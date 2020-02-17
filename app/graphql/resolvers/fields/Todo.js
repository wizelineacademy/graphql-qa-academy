const { ProjectModel, CommentModel  } = require('../../../models')

module.exports = {
    project: async (todo) => {
        const project = await ProjectModel.findById(todo.project)
        return project
    },
    comments: async (todo) => {
        const comments = await CommentModel.find({ todo: todo.id })
        return comments
    }
}
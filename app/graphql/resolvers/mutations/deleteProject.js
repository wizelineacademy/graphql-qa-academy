const { ProjectModel, TodoModel, CommentModel } = require('../../../models')

module.exports = async (parent, { projectId }) => {
    try {
        const project = await ProjectModel.findById(projectId).populate('todos');

        for (const todo of project.todos) {
            await TodoModel.deleteOne({ '_id': todo.id })
            await CommentModel.deleteMany({ 'todo': todo.id })
        }
        await ProjectModel.deleteOne({ '_id': projectId })   
    } catch (e) {
        throw new Error('Project not found')
    }

    return true
}
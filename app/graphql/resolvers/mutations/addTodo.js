const { TodoModel, ProjectModel } = require('../../../models');

module.exports = async (parent, { todo }) => {
    let projectById;
    try {
        projectById = await ProjectModel.findById(todo.projectId);
    } catch (e) {
        throw new Error('Project not found');
    }

    const newTodo = new TodoModel({
        status: 'PENDING',
        todo: todo.todo,
        project: todo.projectId
    });

    await newTodo.save();

    projectById.todos.push(newTodo);
    await projectById.save();

    return newTodo
}
const { TodoModel } = require('../../../models');

module.exports = async (parent, { todo }) => {
    const newTodo = new TodoModel({
        status: 'PENDING',
        todo: todo.todo
    });

    await newTodo.save();

    return newTodo
}
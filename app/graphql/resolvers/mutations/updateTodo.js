const { TodoModel } = require('../../../models')

module.exports = async (parent, { todoId, todo, status }) => {
    try {
        const updateParams = {};
        if(todo) updateParams.todo = todo;
        if(status) updateParams.status = status;

        console.log(updateParams)
        const updatedTodo = await TodoModel.findByIdAndUpdate(todoId, updateParams, { new: true });
        return updatedTodo;
    } catch (e) {
        console.log(e)
        throw new Error('Todo not found')
    }
}
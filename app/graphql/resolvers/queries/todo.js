const { TodoModel } = require('../../../models');

module.exports = async (parent, { id }) => {
    try {
        const Todo = await TodoModel.findById(id);

        return Todo
    } catch (e) {
        console.log(`Todo with ID ${id}  not found`);
    }
}
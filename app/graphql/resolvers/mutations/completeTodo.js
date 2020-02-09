const { TodoModel } = require('../../../models');

module.exports = async (parent, { id }) => {
    try {
        const Todo = await TodoModel.findByIdAndUpdate(id, { status: 'COMPLETED' });

        return true;
    } catch (e) {
        console.log(`Todo with ID ${id}  not found`);
        return false;
    }
}

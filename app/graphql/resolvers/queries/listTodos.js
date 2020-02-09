const { TodoModel } = require('../../../models');

module.exports = async (parent, { showCompleted }) => {
    try {
        const filter = showCompleted ? {} : { status: 'PENDING' }
        const Todos = await TodoModel.find(filter);

        return Todos
    } catch (e) {
        throw new Error('Error fetching todos data')
    }
}

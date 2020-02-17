const { TodoModel } = require('../../../models');

module.exports = async (parent, { projectId, showCompleted }) => {
    try {
        const filter = {}

        if (projectId) {
            filter['project'] = projectId
        }

        if (!showCompleted) {
            filter['status'] = 'PENDING'
        }

        const Todos = await TodoModel.find(filter);

        return Todos
    } catch (e) {
        throw new Error('Error fetching todos data')
    }
}

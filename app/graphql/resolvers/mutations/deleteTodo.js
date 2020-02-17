const { TodoModel } = require('../../../models')

module.exports = async (parent, { todoId }) => {
    try {
        deleted = await TodoModel.deleteOne({ '_id': todoId })
    } catch (e) {
        throw new Error('Todo not found')
    }

    return true
}
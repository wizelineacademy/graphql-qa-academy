const { CommentModel } = require('../../../models')

module.exports = async (parent, { commentId }) => {
    try {
        deleted = await CommentModel.deleteOne({ '_id': commentId })
    } catch (e) {
        throw new Error('Comment not found')
    }

    return true
}
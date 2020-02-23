const { CommentModel } = require('../../../models')

module.exports = async (parent, { commentId, text }) => {
    try {
        const comment = await CommentModel.findByIdAndUpdate(commentId, { text }, { new: true });
        return comment;
    } catch (e) {
        throw new Error('Comment not found')
    }
}
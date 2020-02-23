const { ProjectModel } = require('../../../models')

module.exports = async (parent, { projectId, name }) => {
    try {
        const project = await ProjectModel.findByIdAndUpdate(projectId, { name }, { new: true });
        return project;
    } catch (e) {
        throw new Error('Project not found')
    }
}
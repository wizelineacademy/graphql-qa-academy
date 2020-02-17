const { ProjectModel } = require('../../../models');

module.exports = async () => {
    try {
        const Projects = await ProjectModel.find();

        return Projects
    } catch (e) {
        throw new Error('Error fetching projects data')
    }
}

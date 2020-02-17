const { ProjectModel } = require('../../../models');

module.exports = async (parent, { project }) => {
    const newProject = new ProjectModel(project);

    await newProject.save();

    return newProject;
}

const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: String,
    todos: [{  type: mongoose.Schema.Types.ObjectId, ref: 'Todo' }]
});

const ProjectModel = mongoose.model('Project', ProjectSchema);

module.exports = ProjectModel;
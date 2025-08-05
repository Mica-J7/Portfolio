const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  image: {
    url: { type: String, required: true },
    alt: { type: String, required: true },
  },
  title: { type: String, required: true },
  description: { type: String, required: true },
  tasks: [{ type: String }],
  techIcons: [
    {
      url: { type: String, required: true },
      alt: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model('Project', projectSchema);

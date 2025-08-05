const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  image: {
    url: String,
    alt: String,
  },
  title: String,
  github: {
    url: { type: String, required: true },
    icon: { type: String },
    alt: { type: String },
  },
  description: String,
  techIcons: [{ url: String, alt: String }],
});

module.exports = mongoose.model('Project', projectSchema);

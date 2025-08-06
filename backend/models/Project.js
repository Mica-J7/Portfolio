const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  image: {
    url: String,
    alt: String,
  },
  title: String,
  description: String,
  github: {
    url: { type: String },
    icon: { type: String },
    alt: { type: String },
  },
  techIcons: [{ url: String, alt: String }],
  type: String,
});

module.exports = mongoose.model('Project', projectSchema);

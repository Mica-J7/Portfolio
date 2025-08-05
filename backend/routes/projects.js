const express = require('express');
const router = express.Router();
const projectsCtrl = require('../controllers/projects');

router.get('/', projectsCtrl.getAllProjects);
router.get('/:projectId', projectsCtrl.getProjectById);

module.exports = router;

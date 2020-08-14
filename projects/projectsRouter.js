const express = require('express');
const projects = require('../data/helpers/projectModel');

const router = express.Router();

// Get all the projects
router.get('/', (req, res) => {
  return projects
    .get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err =>
      res.status(500).json({ message: 'Error retrieving projects.' })
    );
});

// Get all the actiosn for a project
router.get('/:id/actions', (req, res) => {
  const projectId = req.params.id;
  return projects
    .getProjectActions(projectId)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err =>
      res.status(500).json({ message: 'Error retrieving projects.' })
    );
});

// Add a new project
router.post('/', (req, res) => {
  const project = req.body;
  return projects
    .insert(project)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err =>
      res.status(500).json({ message: 'Error retrieving projects.' })
    );
});

// Update an existing project
router.put('/:id', (req, res) => {
  const project = req.params.id;
  const changes = req.body;

  return projects
    .update(project, changes)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err =>
      res.status(500).json({ message: 'Error retrieving projects.' })
    );
});

// Delete an existing project
router.delete('/:id', (req, res) => {
  const project = req.params.id;

  return projects
    .remove(project)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err =>
      res.status(500).json({ message: 'Error retrieving projects.' })
    );
});
module.exports = router;

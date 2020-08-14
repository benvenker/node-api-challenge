const express = require('express');
const actions = require('../data/helpers/actionModel');
const router = express.Router();

// Get all the actions
router.get('/', (req, res) => {
  return actions
    .get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err =>
      res.status(500).json({ message: 'Error retrieving actions.' })
    );
});

// Add a new project
router.post('/', (req, res) => {
  const project = req.body;
  return actions
    .insert(project)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err =>
      res.status(500).json({ message: 'Error retrieving actions.' })
    );
});

// Update an existing project
router.put('/:id', (req, res) => {
  const project = req.params.id;
  const changes = req.body;

  return actions
    .update(project, changes)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err =>
      res.status(500).json({ message: 'Error retrieving actions.' })
    );
});

// Delete an existing project
router.delete('/:id', (req, res) => {
  const project = req.params.id;

  return actions
    .remove(project)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err =>
      res.status(500).json({ message: 'Error retrieving actions.' })
    );
});
module.exports = router;

module.exports = router;

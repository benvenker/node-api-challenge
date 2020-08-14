const express = require('express');
const actions = require('../data/helpers/actionModel');
const { validateProjectId } = require('../middleware/validateProjectId');

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

// Add a new action
router.post('/', validateProjectId(), (req, res) => {
  const action = req.body;
  return actions
    .insert(action)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err =>
      res.status(500).json({ message: 'Error retrieving actions.' })
    );
});

// Update an existing action
router.put('/:id', (req, res) => {
  const action = req.params.id;
  const changes = req.body;

  return actions
    .update(action, changes)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err =>
      res.status(500).json({ message: 'Error retrieving actions.' })
    );
});

// Delete an existing project
router.delete('/:id', (req, res) => {
  const project = req.params.id;

  return actions
    .remove(action)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err =>
      res.status(500).json({ message: 'Error retrieving actions.' })
    );
});

module.exports = router;

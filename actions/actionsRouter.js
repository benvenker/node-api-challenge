const express = require('express');
const actions = require('../data/helpers/actionModel');
const { validateProjectId } = require('../middleware/validateProjectId');

const router = express.Router();

// Get all the actions
router.get('/', (req, res) => {
  return actions
    .get()
    .then(actions => {
      if (actions) {
        res.status(200).json(actions);
      } else {
        res.status(400).json({ message: ' actions could not be found' });
      }
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
      if (action) {
        res.status(200).json(action);
      } else {
        res.status(400).json({ message: ' action to add could not be found' });
      }
    })
    .catch(err => res.status(500).json({ message: 'Error adding action.' }));
});

// Update an existing action
router.put('/:id', (req, res) => {
  const action = req.params.id;
  const changes = req.body;

  return actions
    .update(action, changes)
    .then(action => {
      if (action) {
        res.status(200).json(action);
      } else {
        res
          .status(400)
          .json({ message: ' action to update could not be found' });
      }
    })
    .catch(err => res.status(500).json({ message: 'Error updating action.' }));
});

// Delete an existing project
router.delete('/:id', (req, res) => {
  const action = req.params.id;

  return actions
    .remove(action)
    .then(action => {
      if (action) {
        res.status(200).json(action);
      } else {
        res
          .status(400)
          .json({ message: ' actions to delete could not be found' });
      }
    })
    .catch(err => res.status(500).json({ message: 'Error deleting actions.' }));
});

module.exports = router;

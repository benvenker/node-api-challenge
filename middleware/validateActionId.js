const actions = require('../data/helpers/actionModel');

module.exports = { validateActionId };

function validateActionId() {
  return (req, res, next) => {
    const id = req.body.action_id || req.params.id;
    actions
      .get(id)
      .then(action => {
        if (action) {
          req.action = action;
          next();
        } else {
          res.status(404).json({
            message: 'action not found.',
          });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          message: 'Error updating the action',
        });
      });
  };
}

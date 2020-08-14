const projects = require('../data/helpers/projectModel');

module.exports = { validateProjectId };

function validateProjectId() {
  return (req, res, next) => {
    projects
      .get(req.body.project_id)
      .then(project => {
        if (project) {
          req.project = project;
          next();
        } else {
          res.status(404).json({
            message: 'project not found.',
          });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          message: 'Error updating the project',
        });
      });
  };
}

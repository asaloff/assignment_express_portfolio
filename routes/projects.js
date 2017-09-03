var express = require('express');
var router = express.Router();

const {projects} = require('../models/projects');

const findProject = (name) => {
  return projects.find(project => name == project.name);
};

/* GET users listing. */
router.get('/:name', function(req, res, next) {
  var project = findProject(req.params.name);
  res.render('project', { project: project });
});

module.exports = router;

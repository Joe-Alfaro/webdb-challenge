const router = require('express').Router();

const Projects = require('./projects-model.js');

router.get('/', (req, res) => {
  Projects 
    .find()
    .then(projects => {
      res
        .status(200)
        .json(projects)
    })
    .catch(error => {
      res
        .status(500)
        .json(error)
    })
})

router.post('/', (req, res) => {
  newProject = req.body
  Projects
    .add(newProject)
    .then(projects => {
      res
        .status(200)
        .json(projects)
    })
    .catch(error => {
      res
        .status(500)
        .json(error)
    })
})

router.get('/:id', (req, res) => {
  projectId = req.params.id
  Projects.findById(projectId)
    .then(project => {
      res
        .status(200)
        .json(project)
    })
    .catch(error => {
      res
        .status(500)
        .json(error)
    })
})

module.exports = router;

const router = require('express').Router();

const Projects = require('./projects-model.js');

router.get('/', (req, res) => {
  Projects 
    .find()
    .then(dishes => {
      res
        .status(200)
        .json(dishes)
    })
    .catch(error => {
      res
        .status(500)
        .json(error)
    })
});

module.exports = router;

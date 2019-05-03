const router = require('express').Router();

const Actions = require('./actions-model.js');

router.get('/', (req, res) => {
  Actions.find()
    .then(actions => {
      res
        .status(200)
        .json(actions)
    })
    .catch(error => {
      res
        .status(500)
        .json(error)
    })
})

router.post('/', (req, res) => {
  const newAction = req.body
  Actions.add(newAction)
    .then(actions => {
      res
        .status(200)
        .json(actions)
    })
    .catch(error => {
      res
        .status(500)
        .json(error)
    })
})

module.exports = router;

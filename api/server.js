const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('../projects/projects-router.js');
const actionsRouter = require('../actions/actions-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectsRouter);
//server.use('/api/actions', projectsRouter);

server.get('/', (req, res) => {
  res
    .status(200)
    .send('WEB18 Database Challenge API\n');
});

module.exports = server;

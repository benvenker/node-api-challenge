require('dotenv').config();
const express = require('express');
const cors = require('cors');
const actionsRouter = require('./actions/actionsRouter');
const projectsRouter = require('./projects/projectsRouter');

const server = express();
const port = process.env.PORT || 3002;

server.use(express.json());
server.use(cors());

server.use('/api/actions', actionsRouter);
server.use('/api/projects', projectsRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's kill this sprint!</h2>`);
});

module.exports = { server, port };

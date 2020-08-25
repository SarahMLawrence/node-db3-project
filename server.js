const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');
const welcomeRouter = require('./welcome/welcome-router');

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);

server.use(welcomeRouter)

module.exports = server;
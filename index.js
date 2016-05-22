'use strict';

const server = require(__dirname + '/lib/server.js');
const router = require(__dirname + '/lib/router.js');

server.score(router.route);

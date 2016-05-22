'use strict';

const http = require('http');
const Router = require(__dirname + '/router');

function start(route){
  function onReq(req, res) {
    if(req.url === '/' && req.method === 'GET') {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('successful\n');
      return res.end();
      console.log(res);
    }
  }
  http.createServer(onReq).listen(3000, () => {console.log('Server started on localhost:3000')})
}

exports.start = start;

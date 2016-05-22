'use strict';

const http = require('http');
const Router = require(__dirname + '/router');

function score(route){
  function onReq(req, res) {
    if(req.url === '/' && req.method === 'GET') {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('GET request successful\n');
      return res.end();
      console.log(res);
    }

    if(req.url === '/rooney' && req.method === 'POST') {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('POST request successful\n');
      return res.end();
      console.log(res);
    }
    if(req.url === '/rooney' && req.method === 'PUT') {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('PUT request successful\n');
      return res.end();
      console.log(res);
    }

    if(req.url === '/rooney' && req.method === 'PATCH') {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('PATCH request successful\n');
      return res.end();
      console.log(res);
    }

    if(req.url === '/rooney' && req.method === 'DELETE') {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('DELETE request successful\n');
      return res.end();
      console.log(res);
    }

  }
  http.createServer(onReq).listen(3000, () => {console.log('Server started on localhost:3000')})
}

exports.score = score;

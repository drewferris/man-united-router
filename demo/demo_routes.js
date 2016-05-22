'use strict';

const router = require('../lib/router');

router.get('/', (req, res) => {
  res.write('GET request successful');
  console.log(res);
  res.end();
});

router.post('/rooney', (req, res) => {
  res.write('POST request successful');
  console.log(res);
  res.end();
});

router.put('/rooney', (req, res) => {
  res.write('PUT request successful');
  console.log(res);
  res.end();
});

router.patch('/rooney', (req, res) => {
  res.write('PATCH request successful');
  console.log(res);
  res.end();
});

router.delete('/rooney', (req, res) => {
  res.write('DELETE request successful');
  console.log(res);
  res.end();
});

module.exports = router;

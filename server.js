'use strict';

const express = require('express');

// Constants
const PORT = 8081;
const HOST = '0.0.0.0';
// address for browser: http://0.0.0.0:49160/

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
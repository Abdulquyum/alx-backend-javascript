const http = require('http');

const app = http.createServer((req, res) => {
  res.end('Hello Holberton!');
  });

app.listen(1245);

module.exports = app;

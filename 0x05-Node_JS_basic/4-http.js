const { createServer } = require('https');

const port = 1245;

const app = createServer((req, res) => {
  res.end('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Server is Listening on port ${port}`);
});

module.exports = app;

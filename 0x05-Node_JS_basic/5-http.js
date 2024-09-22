const { createServer } = require('http');

const port = 1245;

const { argv } = require('process');

const countStudents = require('./3-read_file_async');

const file = argv[2];

const app = createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');

    countStudents(file)
      .then((data) => {
        res.write(data);
        res.end();
      })
      .catch(() => {
        res.end();
      });
  }
});

app.listen(port, () => {
  console.log(`Server is Listening on port ${port}`);
});

module.exports = app;

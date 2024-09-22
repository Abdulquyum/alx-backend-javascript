const express = require('express');
const { argv } = require('process');
const countStudents = require('./3-read_file_async');

const port = 1245;
const file = argv[2];

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');

  countStudents(file)
    .then(() => {
      res.end();
    })
    .catch((err) => {
      res.send('Error: Cannot load the database')
    });
});

app.listen(port, () => {
  console.log(`Server is Listening on port ${port}`);
});

module.exports = app;


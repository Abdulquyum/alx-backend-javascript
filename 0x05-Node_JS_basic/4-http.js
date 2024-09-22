const { createServer } = require('http');

if (require.main === module) {
  const app = createServer((req, res) => {
    res.end('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
}

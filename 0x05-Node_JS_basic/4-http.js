const http = require('http');

if (require.main === module) {
  const app = http.createServer((req, res) => {
    res.end('Hello Holberton!');
});

app.listen(1245);

module.exports = app;
}

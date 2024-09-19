const { express } = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader = ('Content-Type', 'text/plain');
  res.end('Displays Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

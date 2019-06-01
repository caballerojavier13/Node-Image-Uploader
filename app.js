const express = require('express');
const bodyParser = require('body-parser');

const imageRouter = require('./routes/image');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

imageRouter(app);

app.listen(
  8080,
  () => console.log('Listening...'),
);

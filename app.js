const express = require('express');
const bodyParser = require('body-parser');

const imageRouter = require('./routes/image');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/img', imageRouter);

app.get('/', (req, res) => {
  res.send('Image-Uploader');
});

module.exports = app;

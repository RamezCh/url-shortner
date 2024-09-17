const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/urlShortener');

app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
  res.render('index');
});

app.post('/shortUrls', (req, res, next) => {});

app.listen(process.env.PORT || 4774);

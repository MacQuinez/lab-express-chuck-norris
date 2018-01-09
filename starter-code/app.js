const express = require('express');
const app = express();
const Chuck = require('chucknorris-io');
const client = new Chuck();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/random', (req, res, next) => {
  res.render('joke-by-category');
});
app.get('/categories', (req, res, next) => {
  res.render('categories');
});
app.get('/search', (req, res, next) => {
  res.render('');
});
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});

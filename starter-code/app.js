const express = require('express');
const app = express();
const Chuck = require('chucknorris-io');
const client = new Chuck();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/random', (req, res, next) => {
  client
    .getRandomJoke()
    .then(response => {
      res.render('index', {
        joke: response
      });
    })
    .catch(err => {
      console.log('error');
    });
});

app.get('/categories', (req, res, next) => {
  client
    .getJokeCategories()
    .then(response => {
      res.render('categories', {
        categories: response
        //tantos objetos como queramos
      });
    })
    .catch(err => {
      // handle error
    });
});

app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});

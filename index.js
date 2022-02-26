const express = require('express');
const app = express();
const port = 8001;

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (req, res) => {
  const hero = [{name: 'restaurant-hero', Image: 'restaurant-hero'}];
  res.render('index', { hero });
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
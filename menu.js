const express = require('express');
const app = express();
const port = 8002;

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get("/", (req, res) => {
  const menus = [
    { name: 'burger', image: 'menu.jpg' },
    { name: 'salad', image: 'menu1.jpg' },
    { name: 'shrimp', image: 'menu3.jpg' },
    { name: 'pasta', image: 'menu4.jpg' },
    { name: 'steak', image: 'menu6.jpg' },
    { name: 'pizza', image: 'menu7.jpg' },
    { name: 'fish', image: 'menu8.jpg' },
    { name: 'ribeye', image: 'menu9.jpg' },
  ];

  res.render('menu', { menus });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
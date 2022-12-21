const express = require('express');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const app = express(); // tra ve doi tuong web
const port = 3000; // cong web muon run

// HTTP logger
app.use(morgan('combined'));

//template engine
app.engine('handlebars', handlebars.engine());
app.set('view engine','handlebars')
app.set('views', path.join(__dirname, 'resources', 'views'));

// route
app.get('/', (req, res) => {
    res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
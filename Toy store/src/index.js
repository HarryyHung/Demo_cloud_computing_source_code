// const express = require('express');
// const morgan = require('morgan');
// const handlebars  = require('express-handlebars');
// const app = express(); // tra ve doi tuong web
// const port = 3000; // cong web muon run

// // HTTP logger
// app.use(morgan('combined'));

// //template engine
// app.engine('handlebars', handlebars.engine());
// // app.set('view engine','handlebars')
// // app.set('views', path.join(__dirname, 'resources', 'views'));
// app.set('views', './src/resources/views')

// // route
// app.get('/', (req, res) => {
//     res.render('home');
// })

const path = require('path')
const express = require('express')
const morgan = require('morgan');
const app = express()
const handlebars = require('express-handlebars')
const { extname } = require('path')
const port = 3000

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public'))); // luu anh (thu muc tinh)

app.use(express.urlencoded({
  extended: true
})); 

//middleware
app.use(express.json()); // gui tu code len

// XMLHttpRequest, fetch, axios

// HTTP logger
// app.use(morgan('combined'));

//template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'));
console.log(path.join(__dirname, 'resources/views'))

// routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
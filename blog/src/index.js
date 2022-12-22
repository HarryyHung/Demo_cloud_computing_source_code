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
const app = express()
const handlebars = require('express-handlebars')
const { extname } = require('path')
const port = 3000

//template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine','hbs')
app.set('views', path.join(__dirname, 'resources/views'));
console.log(path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
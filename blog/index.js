const express = require('express')
const morgan = require('morgan')
const app = express() // tra ve doi tuong web
const port = 3000 // cong web muon run

app.use(morgan('combined'))

// route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
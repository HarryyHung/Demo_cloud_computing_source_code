const express = require('express')
const app = express() // tra ve doi tuong web
const port = 3000 // cong web muon run

// route
app.get('/', (req, res) => {
    var a = 1;
    var b = 2;
    var c = a + b;
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
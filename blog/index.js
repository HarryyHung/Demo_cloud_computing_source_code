const express = require('express')
const app = express() // tra ve doi tuong web
const port = 3000 // cong web muon run

// route
app.get('/trang-chu', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
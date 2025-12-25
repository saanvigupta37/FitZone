const express = require('express')
const path = require("path")
const app = express()
const port = 3001

app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "templates/index.html"))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, "templates/about.html"))
})

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, "templates/services.html"))
})

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, "templates/contact.html"))
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})

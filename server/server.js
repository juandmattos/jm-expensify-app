const path = require('path')
const express = require('express')
const app = express()
const publicPath = path.join(__dirname, '..', 'public')
const port = process.env.PORT || 3000

app.use(express.static(publicPath))

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html')) // If what the user needs is not in the public folder, send index.html
})

app.listen(port, () => {
  console.log('Server is up!')
})

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'Docker is awesome!'})
})

const port = process.env.PORT || 8080

app.listen(port, () => console.log('app listening on http://localhost:'+port))
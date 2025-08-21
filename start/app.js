const express = require('express')
const app = express()
const port = 3000
const Controller = require('./controllers')

app.get('/', Controller.read)

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})
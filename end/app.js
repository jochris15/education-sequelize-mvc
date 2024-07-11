const express = require('express')
const app = express()
const port = 3000
const Controller = require('./controllers/controller')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.get('/', Controller.readGames)
app.get('/moba', Controller.readMoba)
app.get('/add', Controller.addGameForm)
app.post('/add', Controller.addGame)
app.get('/:id', Controller.detailGame)
app.get('/:id/delete', Controller.deleteGame)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
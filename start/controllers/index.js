const { Game } = require('../models')

class Controller {
    static async read(req, res) {
        try {
            const games = await Game.findAll()
            res.send(games)
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = Controller
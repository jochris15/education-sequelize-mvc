const { Game } = require('../models/index')
const { Op } = require("sequelize");

class Controller {
    static async readGames(req, res) {
        try {
            const { search, sort } = req.query
            const option = {}

            if (search) {
                option.where = {
                    name: {
                        [Op.iLike]: `%${search}%`,
                    }
                }
            }

            if (sort == 'asc') {
                option.order = [['name', 'asc']]
            }

            const games = await Game.findAll(option)

            res.render('games.ejs', { games })
        } catch (err) {
            console.log(err);
            res.send(err)
        }
    }

    static async readMoba(req, res) {
        try {
            const games = await Game.findMoba()

            res.render('moba.ejs', { games })
        } catch (err) {
            res.send(err)
        }
    }

    static async addGameForm(req, res) {
        try {
            res.render('addForm.ejs')
        } catch (err) {
            res.send(err)
        }
    }

    static async addGame(req, res) {
        try {
            const { name, gameImg, releaseDate, developer, genre } = req.body

            const game = await Game.create({ name, gameImg, releaseDate, developer, genre })

            console.log(game);
            res.redirect('/')
        } catch (err) {
            res.send(err)
        }
    }

    static async detailGame(req, res) {
        try {
            const { id } = req.params
            // const game = await Game.findByPk(id)
            const game = await Game.findOne({
                where: {
                    id
                }
            })

            res.render('detail', { game })
        } catch (err) {
            res.send(err)
        }
    }

    static async deleteGame(req, res) {
        try {
            const { id } = req.params
            await Game.destroy({
                where: {
                    id
                }
            })
            res.redirect('/')
        } catch (err) {
            res.send(err)
        }
    }
}

module.exports = Controller
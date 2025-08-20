const { Game } = require('../models/index')
const { Op } = require("sequelize");

class Controller {
    static async read(req, res) {
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

            if (sort == 'name') {
                option.order = [['name', 'asc']]
            }

            const games = await Game.findAll(option)

            res.render('home', { games })
        } catch (err) {
            console.log(err);
            res.send(err)
        }
    }

    static async readRPG(req, res) {
        try {
            const games = await Game.findRPG()

            res.render('rpg', { games })
        } catch (err) {
            res.send(err)
        }
    }

    static async detail(req, res) {
        try {
            const { id } = req.params
            // const game = await Game.findOne({
            //     where: {
            //         id
            //     }
            // })
            const game = await Game.findByPk(id)

            res.render('detail', { game })
        } catch (err) {
            res.send(err)
        }
    }


    static async addForm(req, res) {
        try {
            res.render('add.ejs')
        } catch (err) {
            res.send(err)
        }
    }

    static async add(req, res) {
        try {
            const { name, gameImg, releaseDate, developer, genre } = req.body

            await Game.create({ name, gameImg, releaseDate, developer, genre })

            res.redirect('/')
        } catch (err) {
            res.send(err)
        }
    }

    static async editForm(req, res) {
        try {
            const { id } = req.params

            const game = await Game.findByPk(id)

            res.render('edit.ejs', { game })
        } catch (err) {
            res.send(err)
        }
    }

    static async edit(req, res) {
        try {
            const { id } = req.params
            const { name, gameImg, releaseDate, developer, genre } = req.body

            await Game.update({ name, gameImg, releaseDate, developer, genre }, {
                where: {
                    id
                }
            })

            res.redirect('/')
        } catch (err) {
            res.send(err)
        }
    }


    static async delete(req, res) {
        try {
            const { id } = req.params

            await Game.destroy({
                where: {
                    id
                }
            })

            res.redirect('/games')
        } catch (err) {
            res.send(err)
        }
    }
}

module.exports = Controller
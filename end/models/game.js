'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static findRPG() { //static method
      return Game.findAll({
        where: {
          genre: 'RPG'
        },
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        }
      })
    }

    gameplay() { // instance method
      if (this.genre == 'MOBA') {
        return '5v5 MOBA'
      } else if (this.genre == 'FPS') {
        return '5v5 Tactical FPS'
      } else if (this.genre === 'BR') {
        return 'Battle Royale'
      } else {
        return `Open World RPG`
      }
    }

    get formatDate() { // getter
      const date = new Date(this.releaseDate)
      return date.toISOString().split('T')[0]
    }
  }
  Game.init({
    name: DataTypes.STRING,
    gameImg: DataTypes.STRING,
    releaseDate: DataTypes.DATE,
    developer: DataTypes.STRING,
    genre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};
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

    static findMoba() { //static method
      return Game.findAll({
        where: {
          genre: 'MOBA'
        },
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        }
      })
    }

    gameplay() { // instance method
      if (this.genre == 'MOBA') {
        return 'Tactical Multiplayer Online Battle Arena'
      } else if (this.genre == 'FPS') {
        return 'Team Based First Person Shooter'
      } else {
        return 'Player VS Player Fight in Battle Royale'
      }
    }

    get formatDate() { // getter
      return this.releaseDate.toLocaleString('id')
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
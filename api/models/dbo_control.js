'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dbo_CONTROL extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dbo_CONTROL.init({
    nome: DataTypes.STRING,
    setor: DataTypes.STRING,
    senha: DataTypes.STRING,
    vrre: DataTypes.INTEGER,
    ulaces: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'dbo_CONTROL',
  });
  return dbo_CONTROL;
};
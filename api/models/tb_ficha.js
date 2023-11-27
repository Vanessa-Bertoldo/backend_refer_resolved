'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TB_FICHA extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TB_FICHA.init({
    matricula: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    setor: DataTypes.STRING,
    classe: DataTypes.INTEGER,
    tamanho: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'TB_FICHA',
  });
  return TB_FICHA;
};
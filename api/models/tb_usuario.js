'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TB_USUARIO extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TB_USUARIO.init({
    ID: DataTypes.INTEGER,
    NOME: DataTypes.STRING,
    USUARIO: DataTypes.STRING,
    SENHA: DataTypes.STRING,
    SETOR: DataTypes.STRING,
    CLASSE: DataTypes.STRING,
    ALTER_FICHA: DataTypes.INTEGER,
    DELETE_FICHA: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TB_USUARIO',
  });
  return TB_USUARIO;
};
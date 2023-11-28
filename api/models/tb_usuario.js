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
    nome: DataTypes.STRING,
    usuario: DataTypes.STRING,
    senha: DataTypes.STRING,
    setor: DataTypes.STRING,
    classe: DataTypes.STRING,
    alter_ficha: DataTypes.INTEGER,
    delete_ficha: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TB_USUARIO',
  });
  return TB_USUARIO;
};
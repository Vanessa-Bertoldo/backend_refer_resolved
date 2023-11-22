'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_usuario.init({
    id: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    setor: DataTypes.STRING,
    classe: DataTypes.STRING,
    alter_historico: DataTypes.INTEGER,
    delet_usuario:  DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tb_usuario',
  });
  return tb_usuario;
};
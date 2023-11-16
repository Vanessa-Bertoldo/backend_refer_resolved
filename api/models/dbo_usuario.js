'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dbo_USUARIO extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dbo_USUARIO.init({
    codigo: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    senha: DataTypes.STRING,
    per_alterar: DataTypes.CHAR,
    per_excluir: DataTypes.CHAR,
    super_usuario: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'dbo_USUARIO',
  });
  return dbo_USUARIO;
};
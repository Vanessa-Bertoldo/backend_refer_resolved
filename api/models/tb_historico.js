'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_historico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_historico.init({
    id: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    setor: DataTypes.STRING,
    classe: DataTypes.STRING,
    data_pagamento: DataTypes.DATE,
    tipo_pagamento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tb_historico',
  });
  return tb_historico;
};

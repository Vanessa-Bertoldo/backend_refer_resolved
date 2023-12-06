'use strict';
const {
  Model
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class TB_TICKET extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TB_TICKET.belongsTo(models.TB_FICHA, { as: "fichas", foreignKey: "id" })
    }
  }
  TB_TICKET.init({
    matricula: DataTypes.INTEGER,
    data: DataTypes.DATE,
    modo_pagamento: DataTypes.STRING,
    valor_pago: DataTypes.FLOAT,
    valor_total: DataTypes.FLOAT,
    registro: DataTypes.DATE,
    tamanho: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'TB_TICKET',
  });
  return TB_TICKET;
};
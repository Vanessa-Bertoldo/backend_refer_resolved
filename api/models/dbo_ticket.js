'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dbo_TICKET extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dbo_TICKET.init({
    matricula: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    data: DataTypes.DATE,
    setor: DataTypes.STRING,
    classe: DataTypes.INTEGER,
    desc: DataTypes.STRING,
    pagamento: DataTypes.INTEGER,
    valor: DataTypes.DOUBLE,
    registro: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'dbo_TICKET',
  });
  return dbo_TICKET;
};
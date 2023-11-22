'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      setor: {
        type: Sequelize.STRING
      },
      classe: {
        type: Sequelize.STRING
      },
      alter_historico: {
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      delet_historico: {
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_usuarios');
  }
};
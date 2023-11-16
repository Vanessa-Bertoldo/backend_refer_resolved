'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dbo_USUARIOs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codigo: {
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      senha: {
        type: Sequelize.STRING
      },
      per_alterar: {
        type: Sequelize.CHAR
      },
      per_excluir: {
        type: Sequelize.CHAR
      },
      super_usuario: {
        type: Sequelize.CHAR
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('dbo_USUARIOs');
  }
};
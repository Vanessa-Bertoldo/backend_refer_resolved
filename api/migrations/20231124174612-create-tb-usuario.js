'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TB_USUARIOs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NOME: {
        allowNull: false,
        type: Sequelize.STRING
      },
      USUARIO: {
        type: Sequelize.STRING
      },
      SENHA: {
        allowNull: false,
        type: Sequelize.STRING
      },
      SETOR: {
        type: Sequelize.STRING
      },
      CLASSE: {
        type: Sequelize.STRING
      },
      ALTER_FICHA: {
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      DELETE_FICHA: {
        defaultValue: 0,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('TB_USUARIOs');
  }
};
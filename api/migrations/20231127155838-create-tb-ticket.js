'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TB_TICKETs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      matricula: {
        type: Sequelize.INTEGER,
        references: {
          model: 'TB_FICHAs',
          key: 'id'
        },
      },
      data: {
        type: Sequelize.DATE,
        validate: {
          isDate: true,
          isAfter: new Date().toISOString(),
        },
      },
      modo_pagamento: {
        type: Sequelize.STRING
      },
      valor_pago:{
        type: Sequelize.FLOAT
      },
      valor_total: {
        type: Sequelize.FLOAT
      },
      registro: {
        type: Sequelize.DATE,
        validate: {
          isDate: true,
          isAfter: new Date().toISOString(),
        },
      },
      tamanho: {
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
    await queryInterface.dropTable('TB_TICKETs');
  }
};
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Что делает: выполняется при применении миграции
     * Что принимает:
     * queryinterface - интерфейс работы с БД
     * Sequilize - объект типов данных
     * Что возвращает: Promise
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('accounts', { 
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      }
     });
  },

  async down(queryInterface, _Sequelize) {
    /**
     * Что делает: выполняется при откате миграции
     * Что принимает: 
     * queryInterface - интерфейс работы с БД
     * Sequelize - объект типов данных
     * Что возвращает: Promise
     */
    await queryInterface.dropTable('accounts');
  }
};

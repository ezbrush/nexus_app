'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('product', [
      {
        title: 'Producto SQLite 1',
        description: 'Ejemplo de producto',
        price: 100,
        image: 'http://img.com/1.png',
        thumbnail: 'http://img.com/1_thumb.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Producto SQLite 2',
        description: 'Otro producto',
        price: 150,
        image: 'http://img.com/2.png',
        thumbnail: 'http://img.com/2_thumb.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('product', null, {});
  },
};

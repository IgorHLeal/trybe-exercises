'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Cartas a Malcolm',
        author: 'C.S.Lewis',
        page_quantity: 157,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },

      {
        title: 'Cartas de um diabo a seu aprendiz',
        author: 'C.S.Lewis',
        page_quantity: 207,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },

      {
        title: 'O peso da glória',
        author: 'C.S.Lewis',
        page_quantity: 182,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },

      {
        title: 'Cristianismo puro e simples',
        author: 'C.S.Lewis',
        page_quantity: 287,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
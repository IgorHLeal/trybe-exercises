'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Cartas a Malcolm',
        author: 'C.S.Lewis',
        page_quantity: 157,
        /* publisher: 'Vida Melhor Editora, LTDA', */
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },

      {
        title: 'Cartas de um diabo a seu aprendiz',
        author: 'C.S.Lewis',
        page_quantity: 207,
        /* publisher: 'Vida Melhor Editora, LTDA', */
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },

      {
        title: 'O peso da glória',
        author: 'C.S.Lewis',
        page_quantity: 182,
        /* publisher: 'Vida Melhor Editora, LTDA', */
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },

      {
        title: 'Cristianismo puro e simples',
        author: 'C.S.Lewis',
        page_quantity: 287,
        /* publisher: 'Vida Melhor Editora, LTDA', */
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};

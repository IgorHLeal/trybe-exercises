const { Book } = require('../models');

const BookService = {
  getAll: async () => {
    const books = await Book.findAll({
      order: [['title', 'ASC']],
    });
    return books;
  },

  findById: async (id) => {
    const book = await Book.findByPk(id);
    return book;
  },

  create: async ({ title, author, pageQuantity, publisher }) => {
    const newBook = await Book.create({ title, author, pageQuantity, publisher });
    return newBook;
  },

  update: async (id, { title, author, pageQuantity, publisher }) => {
    const [updateBook] = await Book.update(
      { title,
        author,
        pageQuantity,
        publisher,
      },
      { where: { id } },
      );
    return updateBook;
  },

  remove: async (id) => {
    const removeBook = await Book.destroy({ where: { id } });
    return removeBook;
  },

  getByAuthor: async (author) => {
    const getAuthor = await BookService.findAll({
      where: { author },
      order: [['title', 'ASC']],
    });
    return getAuthor;
  }
}


module.exports = BookService;
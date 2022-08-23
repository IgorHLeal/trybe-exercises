const { Book } = require('../models/Book');

const BookService = {
  getAll: async () => {
    const books = await Book.findAll({
      order: [[ 'title', 'ASC']],
    });
    return books;
  },

  getById: async (id) => {
    const book = await Book.findByPk(id);
    return book;
  },

  getByAuthor: async (author) => {
    const getAuthor = await Book.findAll({
      where: { author },
      order: [[ 'title', 'ASC']],
    });
    return getAuthor;
  },

  create: async (title, author, pageQuantity, publisher) => {
    const book = await Book.create(title, author, pageQuantity, publisher);
    return book;
  },

  update: async (id, { title, author, pageQuantity, publisher }) => {
    const [updated] = await Book.update(
      {
        title,
        author,
        pageQuantity,
        publisher,
      },
      { where: { id } },
    );

    return updated;
  },

  remove: async (id) => {
    const removedBook = await Book.destroy(
      { where: { id } },
    );
    return removedBook;
  },
};

module.exports = BookService;
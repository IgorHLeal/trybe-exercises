const { Book } = require('../models');

const BookService = {
  getAll: async () => {
    const books = await Book.findAll();
    return books;
  }
}


module.exports = BookService;
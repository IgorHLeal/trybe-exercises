const { BooksService } = require('../services/BooksService');

const BooksController = {
  getAll: async (req, res) => {
    const { author } = req.query;

    let books;

    if(author) {
      books = await BooksService.getByAuthor(author);
    } else {
      books = BooksService.getAll();
    };

    res.status(200).json(books);
  },

  getById: async (req, res) => {
    const { id } = req.params;
    const book = await BooksService.getById(id);

    if(!book) return res.status(404).json({ message: 'Book not found'});

    res.status(200).json(book);
  },

  getByAuthor: async (req, res) => {
    const { id } = req.params;
    const author = await BooksService.getById(id);

    if(!author) return res.status(404).json({ message: 'Book not found'});

    res.status(200).json(author);
  },

  create: async (req, res) => {
    const { title, author, pageQuantity, publisher } = req.body;
    const book = await BooksService.create(title, author, pageQuantity, publisher);

    res.status(200).json(book);
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { title, author, pageQuantity, publisher } = req.body;

    const updated = await BooksService.update(id, { title, author, pageQuantity, publisher });

    if (!updated) return res.status(404).json({ message: 'Book not found!' });

    res.status(200).json({ message: 'Book updated' });
  },

  remove: async (req, res) => {
    const { id } = req.params;

    const removedBook = await BooksService.remove(id);

    if (!removedBook) return res.status(404).json({ message: 'Book not found' });

    res.status(200).json({ message: 'Book removed' });
  }
};

module.exports = BooksController;
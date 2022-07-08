const BookService = require('../services/BookService');

const BookController = {
  getAll: async (req, res) => {
    const { author } = req.query;

    let books;

    if(author) {
      books = await BookService.getByAuthor(author);
    } else {
      books = await BookService.getAll();
    }

    res.status(200).json(books);
  },

  findById: async (req, res) => {
    const book = await BookService.findById(req.params.id);
    
    if(!book) return res.status(404).json({ message: 'Booknot found' });

    res.status(200).json(book);
  },

  create: async (req, res) => {
    const { title, author, pageQuantity, publisher } = req.body;
    const book = await BookService.create({ title, author, pageQuantity, publisher });

    res.status(201).json(book);
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { title, author, pageQuantity, publisher } = req.body;

    const updateBook = await BookService.update( id, { title, author, pageQuantity, publisher });

    if (!updateBook) return res.status(404).json({ message: 'Book not found'});

    res.status(201).json({ message: 'Book updated'});
  },

  remove: async (req, res) => {
    const { id } = req.params;

    const removeBook = await BookService.remove(id);

    if (!removeBook) return res.status(404).json({ message: 'Book not found'});

    res.status(201).json({ message: 'Book rmeoved'});

  }
};

module.exports = BookController;

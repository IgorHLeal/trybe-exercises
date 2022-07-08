const express = require('express');
// const BookController = require('./controllers/BookController');

const booksRouter = require('./routers/Books/booksRouter')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// app.get('/books', BookController.getAll);
app.use('/books', booksRouter);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
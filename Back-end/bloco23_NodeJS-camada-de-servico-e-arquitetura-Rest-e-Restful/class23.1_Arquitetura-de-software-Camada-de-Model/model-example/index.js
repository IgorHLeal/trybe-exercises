// index.js

const express = require('express');

const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();

app.get('/authors', async (_req, res) => {
	const authors = await Author.getAll();

	res.status(200).json(authors);
});

app.get('/books', async (req, res) => {
	const { author_id } = req.query;

	const books = (author_id)
	? await Book.getByAuthorId(author_id)
	: await Book.getAll();

	res.status(200).json(books);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});

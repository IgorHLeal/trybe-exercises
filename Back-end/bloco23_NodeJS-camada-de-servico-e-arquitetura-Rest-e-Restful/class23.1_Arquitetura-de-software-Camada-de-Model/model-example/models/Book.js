const connection = require('./connection');
const Author = require('./models/Author');

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT * FROM model_example.books',
  );
  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

const getByAuthorId = async () => {
  const query = 'SELECT * FROM model_example.books WHERE author_id=?;'
  const [books] = await connection.execute(query, [author_id]);
  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

const getByIdBook = async (id) => {
	const query = 'SELECT * FROM model_example.books WHERE id=?'
	const [ bookData ] = await connection.execute(query, [id]);

	if (bookData.length === 0) return null;

	return bookData.map(({ id, title, author_id }) => ({
    id,
		title,
		authorId: author_id,
  }))[0];
};

const isValidBook = async (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;

  if (!authorId || typeof authorId !== 'number' || (await Author.findById(authorId))) return false;
};

const createBook = async (title, authorId) => {
  connection.execute(
    'INSERT INTO model_example.books (title, authorId) VALUES (?, ?)', [title, authorId],
  );
}


module.exports = { getAll, getByAuthorId, getByIdBook, isValidBook, createBook };

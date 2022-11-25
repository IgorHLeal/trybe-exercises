// ./index.ts

import express from 'express';
import { StatusCodes } from 'http-status-codes';
import 'express-async-errors';
import validationErros from './middlewares/error';
import BooksRouter from './routes/books.routes';

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.get('/', (_req, res) => {
  res.status(StatusCodes.OK).send('Express + TypeScript')
});

app.use(BooksRouter);

app.use(validationErros)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
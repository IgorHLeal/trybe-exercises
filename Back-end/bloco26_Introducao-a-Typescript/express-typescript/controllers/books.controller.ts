import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import BooksService from '../services/books.service';

class BooksController {
  constructor(private bookService = new BooksService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const books = await this.bookService.getAll();
    res.status(StatusCodes.OK).json(books);
  };

  public getById = async(req: Request, res: Response) => {
    const { id } =req.params;
    const book = await this.bookService.getById(Number(id));

    if (!book) {
      return res.status(StatusCodes.NOT_FOUND)
        .json({ message: 'Book not found!' });
    };

    res.status(StatusCodes.OK).json(book);
  };

  public create = async(req: Request, res: Response) => {
    const book = req.body;
    const bookCreated = await this.bookService.create(book);

    res.status(StatusCodes.CREATED).json(bookCreated);
  }
}

export default BooksController;

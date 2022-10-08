import connection from '../models/connection';
import BookModel from '../models/books.model';
import Book from '../interfaces/book.interface';

class BooksService {
  public model: BookModel;

  constructor() {
    this.model = new BookModel(connection);
  }

  public async getAll(): Promise<Book[]> {
    const books = await this.model.getAll();
    return books;
  };

  public async getById(id: number): Promise<Book> {
    const book = await this.model.getById(id);
    return book;
  };

  public async create(book: Book): Promise<Book> {
    return await this.model.create(book);
  }
}

export default BooksService;

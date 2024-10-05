import { Injectable } from '@nestjs/common';
import { BookDto } from '@app/contracts/books/book.dto';
import { CreateBookDto } from '@app/contracts/books/create-book.dto';
import { UpdateBookDto } from '@app/contracts/books/update-book.dto';

@Injectable()
export class BooksService {
  private books = [
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
      rating: 5,
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      rating: 4,
    },
  ];

  create(createBookDto: CreateBookDto) {
    const newBook: BookDto = {
      id: this.books.length + 1,
      ...createBookDto,
    };

    this.books.push(newBook);
    return newBook;
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return this.books.find((book) => book.id === id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}

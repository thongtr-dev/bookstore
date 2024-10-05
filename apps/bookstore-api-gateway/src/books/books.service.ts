import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateBookDto } from './dtos/create-book.dto';
import { UpdateBookDto } from './dtos/update-book.dto';
import { BOOKS_PATTERNS } from '@app/contracts/books/books.patterns';

@Injectable()
export class BooksService {
  constructor(@Inject('BOOKS_SERVICE') private readonly client: ClientProxy) {}

  create(createBookDto: CreateBookDto) {
    return this.client.send(BOOKS_PATTERNS.CREATE_BOOK, createBookDto);
  }

  findAll() {
    return this.client.send(BOOKS_PATTERNS.FIND_ALL_BOOKS, {});
  }

  findOne(id: number) {
    return this.client.send(BOOKS_PATTERNS.FIND_ONE_BOOK, id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.client.send(BOOKS_PATTERNS.UPDATE_BOOK, {
      id,
      ...updateBookDto,
    });
  }

  remove(id: number) {
    return this.client.send(BOOKS_PATTERNS.REMOVE_BOOK, id);
  }
}

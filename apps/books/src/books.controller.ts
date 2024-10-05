import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BooksService } from './books.service';
import { CreateBookDto } from '@app/contracts/books/create-book.dto';
import { UpdateBookDto } from '@app/contracts/books/update-book.dto';
import { BOOKS_PATTERNS } from '@app/contracts/books/books.patterns';

@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @MessagePattern(BOOKS_PATTERNS.CREATE_BOOK)
  create(@Payload() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @MessagePattern(BOOKS_PATTERNS.FIND_ALL_BOOKS)
  findAll() {
    return this.booksService.findAll();
  }

  @MessagePattern(BOOKS_PATTERNS.FIND_ONE_BOOK)
  findOne(@Payload() id: number) {
    return this.booksService.findOne(id);
  }

  @MessagePattern(BOOKS_PATTERNS.UPDATE_BOOK)
  update(@Payload() updateBookDto: UpdateBookDto) {
    return this.booksService.update(updateBookDto.id, updateBookDto);
  }

  @MessagePattern(BOOKS_PATTERNS.REMOVE_BOOK)
  remove(@Payload() id: number) {
    return this.booksService.remove(id);
  }
}

import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BOOKS_SERVICE',
        transport: Transport.TCP,
        options: { port: 3002 },
      },
    ]),
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}

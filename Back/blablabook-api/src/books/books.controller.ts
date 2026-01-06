// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Controller, Post, Get, Body } from '@nestjs/common';
import { BooksService } from './books.service';
// import { CreateBookDto } from './dto/create-book.dto';
// import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  // @Post('import')
  // async create() {
  //   await this.booksService.getBooksFromGoogleApi();
  //   return { message: 'ça marche' };
  // }

  @Post('import')
  async create() {
    await this.booksService.getBooksFromOpenLibraryApi();
    return { message: 'ça marche avec Open Library' };
  }

  @Get('fetch-random')
  async findTenRandomBooks() {
    const randomBooks = await this.booksService.getTenRandomBooks();
    return randomBooks;
  }

  @Get('fetch-latest')
  async finTenLatestBooks() {
    const latestBooks = await this.booksService.getTenLatestBooks();
    return latestBooks;
  }

  // @Get()
  // findAll() {
  //   return this.booksService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.booksService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
  //   return this.booksService.update(+id, updateBookDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.booksService.remove(+id);
  // }
}

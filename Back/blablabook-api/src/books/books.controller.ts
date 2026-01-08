// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import {
  Controller,
  Post,
  Get,
  Body,
  Query,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
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
  async findTenRandomBooks(@Query('userId') userId?: string) {
    return this.booksService.getTenRandomBooks(userId ? +userId : undefined);
  }

  @Get('fetch-popular-books')
  async findTenMostPopularBooks(@Query('userId') userId?: string) {
    return this.booksService.getTenMostPopularBooks(
      userId ? +userId : undefined,
    );
  }

  @Get('fetch-latest')
  async findTenLatestBooks(@Query('userId') userId?: string) {
    return this.booksService.getTenLatestBooks(userId ? +userId : undefined);
  }

  @Get()
  findAll(@Query('userId') userId?: string) {
    return this.booksService.getBooks(userId ? +userId : undefined);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.booksService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
  //   return this.booksService.update(+id, updateBookDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.booksService.remove(+id);
  // }
}

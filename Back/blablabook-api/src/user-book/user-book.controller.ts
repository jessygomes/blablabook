import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { UserBookService } from './user-book.service';
// import { NewUserBookDto } from './dto/new-user-book.dto';
import { ApiTags } from '@nestjs/swagger';
// import { UpdateUserBookDto } from './dto/update-user-book.dto';

@ApiTags('Userbook')
@Controller('userbook')
export class UserBookController {
  constructor(private readonly userBookService: UserBookService) {}

  @Post('/add/:userId/:bookId')
  create(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('bookId', ParseIntPipe) bookId: number,
  ) {
    return this.userBookService.create({
      userId: userId,
      bookId: bookId,
      status: 'NOT_READ',
    });
  }

  @Get()
  findAll() {
    return this.userBookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userBookService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserBookDto: UpdateUserBookDto) {
  //   return this.userBookService.update(+id, updateUserBookDto);
  // }

  @Delete('/remove/:id')
  remove(@Param('id') id: string) {
    return this.userBookService.remove(+id);
  }
}

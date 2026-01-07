import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { NewUserBookDto } from './dto/new-user-book.dto';
// import { UpdateUserBookDto } from './dto/update-user-book.dto';
import { UserBook } from './entities/user-book.entity';

@Injectable()
export class UserBookService {
  constructor(private prisma: PrismaService) {}

  async create(data: NewUserBookDto): Promise<UserBook> {
    return this.prisma.userBook.create({
      data: {
        status: 'NOT_READ',
        userId: data.userId,
        bookId: data.bookId,
      },
    });
  }

  findAll() {
    return `This action returns all userBook`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userBook`;
  }

  // update(id: number, updateUserBookDto: UpdateUserBookDto) {
  //   return `This action updates a #${id} userBook`;
  // }

  async remove(id: number) {
    return this.prisma.userBook.delete({
      where: { id },
    });
  }
}

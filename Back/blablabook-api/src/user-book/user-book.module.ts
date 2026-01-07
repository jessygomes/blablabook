import { Module } from '@nestjs/common';
import { UserBookService } from './user-book.service';
import { UserBookController } from './user-book.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UserBookController],
  providers: [UserBookService],
})
export class UserBookModule {}

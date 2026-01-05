import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
// import { PrismaService } from 'src/prisma/prisma.service';
//import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [HttpModule, PrismaModule],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}

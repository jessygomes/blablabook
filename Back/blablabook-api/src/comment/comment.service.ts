import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  async createComment(userId: number, dto: CreateCommentDto) {
    const book = await this.prisma.book.findUnique({
      where: { id: dto.bookId },
      select: { id: true },
    });

    if (!book) throw new NotFoundException("Livre introuvable");

    return this.prisma.comment.create({
      data: {
        title: dto.title,
        content: dto.content,

        reportCounter: 0,
        status: "ACTIVE",
        date: new Date(),

        user: { connect: { id: userId } },
        book: { connect: { id: dto.bookId } },
      },
      include: {
        user: { select: { id: true, username: true, profilePicture: true } },
        book: { select: { id: true, title: true, author: true, cover: true } },
      },
    });
  }

  async latestCommentPerBook(take = 10) {
    return this.prisma.comment.findMany({
      where: {
        status: 'ACTIVE',
      },
      orderBy: {
        date: 'desc',
      },
      distinct: ['bookId'],
      take,
      include: {
        book: true,
        user: {
          select: {
            id: true,
            username: true,
            profilePicture: true,
          },
        },
      },
    });
  }

  async numbeOfCommentsPerBook(take = 10) {
    const groupedComments = await this.prisma.comment.groupBy({
      by: ['bookId'],
      where: {
        status: 'ACTIVE',
      },
      _count: {
        bookId: true,
      },
      orderBy: {
        _count: {
          bookId: 'desc',
        },
      },
      take,
    });
    return groupedComments;
  }
}

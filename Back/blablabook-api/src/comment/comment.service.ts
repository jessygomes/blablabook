import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  async getCommentCount() {
    const count = await this.prisma.comment.count();
    return { count };
  }

  async getReportedCommentCount() {
    const count = await this.prisma.comment.count({
      where: {
        reportCounter: {
          gte: 5,
        },
      },
    });

    return { count };
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

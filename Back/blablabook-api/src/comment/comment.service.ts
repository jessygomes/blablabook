import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";


@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  async latestCommentPerBook(take = 10) {
    return this.prisma.comment.findMany({
      where: {
        status: "ACTIVE",
      },
      orderBy: {
        date: "desc",
      },
      distinct: ["bookId"],
      take,
      include: {
        book: true,
        user: {
          select: {
            id: true,
            username: true,
          },
        },
      },
    });
  }
}
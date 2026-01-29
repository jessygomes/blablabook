import { Body, Controller, Get, Post, Request, Query, UseGuards } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { SelfOrAdminGuard } from 'src/auth/guards/selfOrAdmin.guard';
import { AuthGuard } from '../auth/guards/auth.guard';
import { User } from '../../generated/prisma';


@Controller('comments')
export class CommentController {
  constructor(private service: CommentService) {}

  @Get('latest-per-book')
  latestPerBook(@Query('take') take?: string) {
    const n = take ? Number(take) : 10;
    return this.service.latestCommentPerBook(
      Number.isFinite(n) ? Math.min(n, 10) : 10,
    );
  }

  @UseGuards(AuthGuard)
  @Post()
  async create(
    @Body() createCommentDto: CreateCommentDto,
    @Request() req: Request & { user: User },
  ) {
    const userId = req.user.id;
    return this.service.createComment(userId, createCommentDto);
  }
}

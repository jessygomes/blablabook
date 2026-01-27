import { Controller, Get, NotFoundException, Query } from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('comments')
export class CommentController {
  constructor(private service: CommentService) {}

  @Get('comment-count')
  async getCommentCount() {
    const commentCount = await this.service.getCommentCount();
    if (commentCount > 0) {
      return commentCount;
    } else {
      throw new NotFoundException('Aucun commentaire trouvé');
    }
  }

  @Get('latest-per-book')
  latestPerBook(@Query('take') take?: string) {
    const n = take ? Number(take) : 10;
    return this.service.latestCommentPerBook(
      Number.isFinite(n) ? Math.min(n, 10) : 10,
    );
  }
}

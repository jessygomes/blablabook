import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { CommentService } from "./comment.service";


@Controller("comments")
export class CommentController {
  constructor(private service: CommentService) {}

  @Get("latest-per-book")
  latestPerBook(@Query("take") take?: string) {
    const n = take ? Number(take) : 10;
    return this.service.latestCommentPerBook(Number.isFinite(n) ? Math.min(n, 10) : 10);
  }
}
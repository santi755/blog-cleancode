import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SearchCommentsService } from 'src/bounded-contexts/blog/application/services/comments/create-comments/SearchComments.service';
import { Comments } from 'src/bounded-contexts/blog/domain/entities/comments/comments.entity';
import { CreateCommentsService } from 'src/bounded-contexts/blog/application/services/comments/create-comments/CreateComments.service';
import { CreateCommentsDto } from 'src/bounded-contexts/blog/domain/dtos/comments/CreateComments.dto';

@Controller('comments')
export class CommentsController {
  constructor(
    private readonly createCommentsService: CreateCommentsService,
    private readonly searchCommentsService: SearchCommentsService,
  ) {}

  @Get(':commentId')
  async getCommentById(
    @Param('commentId') commentId: string,
  ): Promise<Comments> {
    try {
      return await this.searchCommentsService.search(commentId);
    } catch (error) {
      return error;
    }
  }

  @Post()
  async createComment(
    @Body() createCommentsDto: CreateCommentsDto,
  ): Promise<Comments> {
    try {
      return await this.createCommentsService.create(createCommentsDto);
    } catch (error) {
      return error;
    }
  }
}

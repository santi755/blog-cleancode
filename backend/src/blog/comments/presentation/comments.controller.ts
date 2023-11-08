import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SearchCommentsService } from 'src/blog/comments/application/services/search-comments/SearchComments.service';
import { Comments } from 'src/blog/comments/domain/entities/comments.entity';
import { CreateCommentsService } from 'src/blog/comments/application/services/create-comments/CreateComments.service';
import { CreateCommentsDto } from 'src/blog/comments/domain/dtos/CreateComments.dto';

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

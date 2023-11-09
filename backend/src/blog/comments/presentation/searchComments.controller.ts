import { Controller, Get, Param } from '@nestjs/common';
import { SearchCommentsService } from 'src/blog/comments/application/services/search-comments/SearchComments.service';
import { Comments } from 'src/blog/comments/domain/entities/comments.entity';

@Controller('comments')
export class SearchCommentsController {
  constructor(private readonly searchCommentsService: SearchCommentsService) {}

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
}

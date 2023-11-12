import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { SearchCommentsService } from 'src/blog/comments/application/services/search-comments/SearchComments.service';
import { Comments } from 'src/blog/comments/domain/entities/Comments.entity';

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
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Error searching comment.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

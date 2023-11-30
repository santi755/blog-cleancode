import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import SearchComments from 'src/blog/comments/application/use-cases/SearchComments.usecase';
import Comment from 'src/blog/comments/domain/entities/Comment.entity';

@Controller('comments')
export default class GetCommentController {
  constructor(private readonly searchComments: SearchComments) {}

  @Get(':commentId')
  async getComment(@Param('commentId') commentId: string): Promise<Comment> {
    try {
      return await this.searchComments.execute(commentId);
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

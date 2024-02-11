import SearchComments from 'src/blog/comments/application/use-cases/SearchComments.usecase';
import { Controller, Get, Param } from '@nestjs/common';
import Comment from 'src/blog/comments/domain/entities/Comment.entity';

@Controller('posts')
export default class GetCommentsByPostController {
  constructor(private readonly searchComments: SearchComments) {}

  // TODO: What HttpCode(HttpStatus.OK) does?
  // @HttpCode(HttpStatus.OK)
  @Get(':postId/comments')
  async search(@Param('postId') postId: string): Promise<Comment[]> {
    return await this.searchComments.execute(postId);
  }
}

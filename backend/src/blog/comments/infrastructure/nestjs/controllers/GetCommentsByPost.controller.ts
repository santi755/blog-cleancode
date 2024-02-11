import Post from 'src/blog/posts/domain/entities/Post.entity';
import SearchPosts from 'src/blog/posts/application/use-cases/SearchPosts.usecase';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('posts')
export default class GetCommentsByPostController {
  constructor(private readonly searchPosts: SearchPosts) {}

  // TODO: What HttpCode(HttpStatus.OK) does?
  // @HttpCode(HttpStatus.OK)
  @Get(':postId/comments')
  async search(@Param('postId') postId: string): Promise<Post> {
    return await this.searchPosts.execute(postId);
  }
}

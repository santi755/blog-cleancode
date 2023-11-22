import Posts from 'src/blog/posts/domain/entities/Posts.entity';
import SearchPosts from 'src/blog/posts/application/use-cases/SearchPosts.usecase';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('posts')
export default class SearchPostsController {
  constructor(private readonly searchPosts: SearchPosts) {}

  // TODO: What HttpCode(HttpStatus.OK) does?
  // @HttpCode(HttpStatus.OK)
  @Get(':postId')
  async search(@Param('postId') postId: string): Promise<Posts> {
    return await this.searchPosts.execute(postId);
  }
}

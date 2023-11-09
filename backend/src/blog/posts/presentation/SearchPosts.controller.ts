import { Posts } from 'src/blog/posts/domain/entities/Posts.entity';
import { SearchPostsService } from 'src/blog/posts/application/services/search-posts/SearchPosts.service';
import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';

@Controller('posts')
export class SearchPostsController {
  constructor(private readonly searchPostsService: SearchPostsService) {}

  // TODO: What HttpCode(HttpStatus.OK) does?
  @HttpCode(HttpStatus.OK)
  @Get(':postId')
  async searchPosts(@Param('postId') postId: string): Promise<Posts> {
    return await this.searchPostsService.search(postId);
  }
}

import { Posts } from 'src/blog/posts/domain/entities/posts.entity';
import { SearchPostsService } from 'src/blog/posts/application/services/search-posts/SearchPosts.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('posts')
export class SearchPostsController {
  constructor(private readonly searchPostsService: SearchPostsService) {}

  @Get(':postId')
  async searchPosts(@Param('postId') postId: string): Promise<Posts> {
    return await this.searchPostsService.search(postId);
  }
}

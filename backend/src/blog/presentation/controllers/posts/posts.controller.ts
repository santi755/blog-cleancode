import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from 'src/blog/application/services/posts/posts.service';
import { Posts } from 'src/blog/domain/entities/posts/posts.entity';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get(':postId')
  async getPostById(@Param('postId') postId: string): Promise<Posts> {
    const post = await this.postsService.search(postId);
    return post;
  }
}

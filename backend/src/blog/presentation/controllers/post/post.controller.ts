import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from '../../../application/services/post/posts.service';
import { Post } from 'src/blog/domain/entities/post/post.entity';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get(':postId')
  async getPostById(@Param('postId') postId: string): Promise<Post> {
    const post = await this.postsService.search(postId);
    return post;
  }
}

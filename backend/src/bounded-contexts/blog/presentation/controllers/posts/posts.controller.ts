import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { PostsService } from 'src/bounded-contexts/blog/application/services/posts/posts.service';
import { Posts } from 'src/bounded-contexts/blog/domain/entities/posts/posts.entity';
import { CreatePostsDto } from 'src/bounded-contexts/blog/domain/dtos/posts/createPosts.dto';
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get(':postId')
  async getPostById(@Param('postId') postId: string): Promise<Posts> {
    return await this.postsService.search(postId);
  }

  @Post()
  async createPost(@Body() createPostsDto: CreatePostsDto): Promise<Posts> {
    try {
      return await this.postsService.create(createPostsDto);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

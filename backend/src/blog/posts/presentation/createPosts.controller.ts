import { Posts } from 'src/blog/posts/domain/entities/posts.entity';
import { CreatePostsService } from 'src/blog/posts/application/services/create-posts/CreatePosts.service';
import { CreatePostsDto } from 'src/blog/posts/domain/dtos/createPosts.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('posts')
export class CreatePostsController {
  constructor(private readonly createPostsService: CreatePostsService) {}

  @Post()
  async createPost(@Body() createPostsDto: CreatePostsDto): Promise<Posts> {
    try {
      return await this.createPostsService.create(createPostsDto);
    } catch (error) {
      return error;
    }
  }
}

import Posts from 'src/blog/posts/domain/entities/Posts.entity';
import { CreatePostsService } from 'src/blog/posts/application/services/create-posts/CreatePosts.service';
import { CreatePostsRequestDto } from 'src/blog/posts/presentation/CreatePosts.dto';
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

@Controller('posts')
export class CreatePostsController {
  constructor(private readonly createPostsService: CreatePostsService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async createPost(
    @Body() createPostsDto: CreatePostsRequestDto,
  ): Promise<Posts> {
    try {
      return await this.createPostsService.create(
        createPostsDto.title,
        createPostsDto.content,
        createPostsDto.status,
      );
    } catch (error) {
      throw error;
      /*throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error,
        },
        HttpStatus.BAD_REQUEST,
      );*/
    }
  }
}

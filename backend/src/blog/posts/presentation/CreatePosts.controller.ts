import Posts from 'src/blog/posts/domain/entities/Posts.entity';
import { CreatePostsService } from 'src/blog/posts/application/services/create-posts/CreatePosts.service';
import { CreatePostsRequestDto } from 'src/blog/posts/presentation/CreatePosts.dto';
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
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
      return await this.createPostsService.create(createPostsDto);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Error creating post.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

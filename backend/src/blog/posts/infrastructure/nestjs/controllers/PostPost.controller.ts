import Posts from 'src/blog/posts/domain/entities/Posts.entity';
import CreatePosts from '../../../application/use-cases/CreatePosts.usecase';
import { CreatePostsRequestDto } from 'src/blog/posts/infrastructure/nestjs/controllers/Posts.dto';
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

@Controller('posts')
export default class PostPostController {
  constructor(readonly createPosts: CreatePosts) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createPostsDto: CreatePostsRequestDto): Promise<Posts> {
    try {
      return await this.createPosts.execute(
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

import PostsStatus from 'src/blog/posts/domain/value-objects/PostsStatus.vo';
import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';
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
import CustomDate from 'src/shared/domain/value-objects/CustomDate.vo';

@Controller('posts')
export class CreatePostsController {
  constructor(private readonly createPostsService: CreatePostsService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async createPost(
    @Body() createPostsDto: CreatePostsRequestDto,
  ): Promise<Posts> {
    try {
      const postId = PostsId.generate();
      const postPublishedAt = CustomDate.generate();
      const postEditedAt = CustomDate.generate();
      const postsStatus = PostsStatus.of(createPostsDto.status);
      return await this.createPostsService.create(
        postId,
        postPublishedAt,
        postEditedAt,
        createPostsDto.title,
        createPostsDto.content,
        postsStatus,
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

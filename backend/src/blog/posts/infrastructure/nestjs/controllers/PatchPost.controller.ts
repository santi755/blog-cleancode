import EditPosts from 'src/blog/posts/application/use-cases/EditPosts.usecase';
import { EditPostsRequestDto } from 'src/blog/posts/infrastructure/nestjs/controllers/Posts.dto';
import Post from 'src/blog/posts/domain/entities/Post.entity';
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

@Controller('posts')
export default class PatchPostController {
  constructor(private readonly editPosts: EditPosts) {}

  @Patch(':postId')
  @UsePipes(new ValidationPipe())
  async edit(
    @Param('postId') postsId: string,
    @Body() editPostsDto: EditPostsRequestDto,
  ): Promise<Post> {
    try {
      return await this.editPosts.execute(
        postsId,
        editPostsDto.title,
        editPostsDto.content,
        editPostsDto.status,
      );
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

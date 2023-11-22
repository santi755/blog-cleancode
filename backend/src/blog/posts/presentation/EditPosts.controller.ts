import PostsStatus from 'src/blog/posts/domain/value-objects/PostsStatus.vo';
import CustomDate from 'src/shared/domain/value-objects/CustomDate.vo';
import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';
import { EditPostsService } from 'src/blog/posts/application/services/edit-posts/EditPosts.service';
import { EditPostsRequestDto } from 'src/blog/posts/presentation/EditPosts.dto';
import Posts from 'src/blog/posts/domain/entities/Posts.entity';
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
export class EditPostsController {
  constructor(private readonly editPostsService: EditPostsService) {}

  @Patch(':postId')
  @UsePipes(new ValidationPipe())
  async editPost(
    @Param('postId') postsId: string,
    @Body() editPostsDto: EditPostsRequestDto,
  ): Promise<Posts> {
    try {
      const postId = PostsId.of(postsId);
      const postPublishedAt = CustomDate.generate();
      const postEditedAt = CustomDate.generate();
      const postsStatus = PostsStatus.of(editPostsDto.status);

      return await this.editPostsService.edit(
        postId,
        postPublishedAt,
        postEditedAt,
        editPostsDto.title,
        editPostsDto.content,
        postsStatus,
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

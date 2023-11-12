import { EditPostsService } from 'src/blog/posts/application/services/edit-posts/EditPosts.service';
import { EditPostsRequestDto } from 'src/blog/posts/presentation/EditPosts.dto';
import { Posts } from 'src/blog/posts/domain/entities/Posts.entity';
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
      return await this.editPostsService.edit({
        id: postsId,
        ...editPostsDto,
      });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Error editing post.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

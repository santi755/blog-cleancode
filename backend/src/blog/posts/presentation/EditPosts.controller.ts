import { EditPostsService } from 'src/blog/posts/application/services/edit-posts/EditPosts.service';
import { EditPostsDto } from 'src/blog/posts/domain/dtos/EditPosts.dto';
import { Posts } from 'src/blog/posts/domain/entities/Posts.entity';
import {
  Body,
  Controller,
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
    @Body() editPostsDto: EditPostsDto,
  ): Promise<Posts> {
    try {
      return await this.editPostsService.edit({
        id: postsId,
        ...editPostsDto,
      });
    } catch (error) {
      return error;
    }
  }
}

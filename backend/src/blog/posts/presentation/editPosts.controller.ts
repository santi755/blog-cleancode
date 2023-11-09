import { EditPostsService } from 'src/blog/posts/application/services/edit-posts/EditPosts.service';
import { EditPostsDto } from 'src/blog/posts/domain/dtos/editPosts.dto';
import { Posts } from 'src/blog/posts/domain/entities/posts.entity';
import { Body, Controller, Param, Patch } from '@nestjs/common';

@Controller('posts')
export class EditPostsController {
  constructor(private readonly editPostsService: EditPostsService) {}

  @Patch(':postId')
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

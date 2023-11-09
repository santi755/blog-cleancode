import { EliminatePostsService } from 'src/blog/posts/application/services/eliminate-posts/EliminatePosts.service';
import { Controller, Delete, Param } from '@nestjs/common';

@Controller('posts')
export class EliminatePostsController {
  constructor(private readonly eliminatePostsService: EliminatePostsService) {}

  @Delete(':postId')
  async eliminatePosts(@Param('postId') postId: string): Promise<void> {
    try {
      return await this.eliminatePostsService.eliminate(postId);
    } catch (error) {
      return error;
    }
  }
}

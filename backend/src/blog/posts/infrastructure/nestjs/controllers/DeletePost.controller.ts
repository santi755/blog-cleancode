import EliminitePosts from 'src/blog/posts/application/use-cases/EliminatePosts.usecase';
import {
  Controller,
  Delete,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';

@Controller('posts')
export default class DeletePostController {
  constructor(private readonly eliminitePosts: EliminitePosts) {}

  @Delete(':postId')
  async eliminate(@Param('postId') postId: string): Promise<void> {
    try {
      return await this.eliminitePosts.execute(postId);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Error eliminating post.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

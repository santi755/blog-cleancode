import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import Comment from 'src/blog/comments/domain/entities/Comment.entity';
import AddCommentToPost from 'src/blog/posts/application/use-cases/AddCommentToPost.usecase';
import { CommentRequestDto } from 'src/blog/comments/infrastructure/nestjs/controllers/Comment.dto';

@Controller('posts')
export default class PostCommentController {
  constructor(private readonly addCommentToPost: AddCommentToPost) {}

  @Post(':postId/comments')
  @UsePipes(new ValidationPipe())
  async edit(
    @Param('postId') postsId: string,
    @Body() commentRequestDto: CommentRequestDto,
  ): Promise<Comment> {
    try {
      return await this.addCommentToPost.execute(
        postsId,
        commentRequestDto.author,
        commentRequestDto.content,
      );
    } catch (error) {
      console.log({ error });
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

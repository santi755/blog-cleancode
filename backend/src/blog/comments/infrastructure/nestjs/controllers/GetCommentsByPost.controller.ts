import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import Comment from 'src/blog/comments/domain/entities/Comment.entity';
import AddCommentToPost from 'src/blog/comments/application/use-cases/AddComment.usecase';
import { CommentRequestDto } from 'src/blog/comments/infrastructure/nestjs/controllers/Comment.dto';

@Controller('posts')
export default class GetCommentsByPostController {
  constructor(private readonly addCommentToPost: AddCommentToPost) {}

  @Get(':postId/comments')
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

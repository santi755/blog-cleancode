import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import Comment from 'src/blog/comments/domain/entities/Comment.entity';
import Createcomments from 'src/blog/comments/application/use-cases/CreateComments.usecase';
import { CreateCommentsRequestDto } from 'src/blog/comments/infrastructure/nestjs/controllers/Comment.dto';

@Controller('comments')
export default class PostCommentController {
  constructor(private readonly createcomments: Createcomments) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async PostComment(
    @Body() createCommentsDto: CreateCommentsRequestDto,
  ): Promise<Comment> {
    try {
      return await this.createcomments.execute(
        createCommentsDto.author,
        createCommentsDto.content,
        createCommentsDto.postId,
      );
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Error creating comment.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

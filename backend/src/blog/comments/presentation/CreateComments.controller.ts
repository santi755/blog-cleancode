import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import Comments from 'src/blog/comments/domain/entities/Comments.entity';
import { CreateCommentsService } from 'src/blog/comments/application/services/create-comments/CreateComments.service';
import { CreateCommentsRequestDto } from 'src/blog/comments/presentation/CreateComments.dto';

@Controller('comments')
export class CreateCommentsController {
  constructor(private readonly createCommentsService: CreateCommentsService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async createComment(
    @Body() createCommentsDto: CreateCommentsRequestDto,
  ): Promise<Comments> {
    try {
      return await this.createCommentsService.create(
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

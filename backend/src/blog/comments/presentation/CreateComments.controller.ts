import { Body, Controller, Post } from '@nestjs/common';
import { Comments } from 'src/blog/comments/domain/entities/Comments.entity';
import { CreateCommentsService } from 'src/blog/comments/application/services/create-comments/CreateComments.service';
import { CreateCommentsDto } from 'src/blog/comments/domain/dtos/CreateComments.dto';

@Controller('comments')
export class CreateCommentsController {
  constructor(private readonly createCommentsService: CreateCommentsService) {}

  @Post()
  async createComment(
    @Body() createCommentsDto: CreateCommentsDto,
  ): Promise<Comments> {
    try {
      return await this.createCommentsService.create(createCommentsDto);
    } catch (error) {
      return error;
    }
  }
}

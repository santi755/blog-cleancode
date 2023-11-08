import { Injectable } from '@nestjs/common';
import { Comments } from 'src/blog/comments/domain/entities/comments.entity';
import { CreateCommentsDto } from 'src/blog/comments/domain/dtos/CreateComments.dto';
import { CommentsRepository } from 'src/blog/comments/domain/interfaces/comments.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreateCommentsService {
  commentsRepository: CommentsRepository;

  constructor(
    @InjectRepository(Comments) commentsRepository: CommentsRepository,
  ) {
    this.commentsRepository = commentsRepository;
  }

  async create(createCommentsDto: CreateCommentsDto): Promise<Comments> {
    try {
      return this.commentsRepository.add(createCommentsDto);
    } catch (error) {
      throw new Error(error);
    }
  }
}

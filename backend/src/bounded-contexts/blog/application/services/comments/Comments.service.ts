import { Injectable } from '@nestjs/common';
import { CommentsRepository } from 'src/bounded-contexts/blog/domain/interfaces/repositories/comments.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Comments } from 'src/bounded-contexts/blog/domain/entities/comments/comments.entity';

@Injectable()
export class CommentsService {
  commentsRepository: CommentsRepository;

  constructor(
    @InjectRepository(Comments) commentsRepository: CommentsRepository,
  ) {
    this.commentsRepository = commentsRepository;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comments } from 'src/bounded-contexts/blog/domain/entities/comments/comments.entity';
import { CommentsRepository } from 'src/bounded-contexts/blog/domain/interfaces/repositories/comments.repository.interface';

@Injectable()
export class SearchCommentsService {
  commentsRepository: CommentsRepository;

  constructor(
    @InjectRepository(Comments) commentsRepository: CommentsRepository,
  ) {
    this.commentsRepository = commentsRepository;
  }

  search(commentId: string): Promise<Comments> {
    try {
      return this.commentsRepository.search(commentId);
    } catch (error) {
      throw new Error(error);
    }
  }
}

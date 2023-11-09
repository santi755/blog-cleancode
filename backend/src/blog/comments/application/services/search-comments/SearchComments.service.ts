import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comments } from 'src/blog/comments/domain/entities/Comments.entity';
import { CommentsRepository } from 'src/blog/comments/domain/interfaces/Comments.repository.interface';

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

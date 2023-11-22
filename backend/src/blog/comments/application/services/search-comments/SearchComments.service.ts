import CommentsId from 'src/blog/comments/domain/value-objects/CommentsId.vo';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Comments from 'src/blog/comments/domain/entities/Comments.entity';
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
    return this.commentsRepository.search(CommentsId.of(commentId));
  }
}

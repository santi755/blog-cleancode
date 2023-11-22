import CommentsId from 'src/blog/comments/domain/value-objects/CommentsId.vo';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Comments from 'src/blog/comments/domain/entities/Comments.entity';
import { CommentsRepository } from 'src/blog/comments/domain/interfaces/Comments.repository.interface';

@Injectable()
export default class SearchComments {
  commentsRepository: CommentsRepository;

  constructor(
    @InjectRepository(Comments) commentsRepository: CommentsRepository,
  ) {
    this.commentsRepository = commentsRepository;
  }

  async execute(commentId: string): Promise<Comments> {
    return await this.commentsRepository.search(CommentsId.of(commentId));
  }
}

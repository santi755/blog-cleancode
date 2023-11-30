import CommentsId from 'src/blog/comments/domain/value-objects/CommentsId.vo';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Comment from 'src/blog/comments/domain/entities/Comment.entity';
import { CommentsRepository } from 'src/blog/comments/domain/interfaces/Comments.repository.interface';

@Injectable()
export default class SearchComments {
  commentsRepository: CommentsRepository;

  constructor(
    @InjectRepository(Comment) commentsRepository: CommentsRepository,
  ) {
    this.commentsRepository = commentsRepository;
  }

  async execute(commentId: string): Promise<Comment> {
    return await this.commentsRepository.search(CommentsId.of(commentId));
  }
}

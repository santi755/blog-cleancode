import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentsRepository } from 'src/blog/comments/domain/interfaces/Comments.repository.interface';
import Comment from 'src/blog/comments/domain/entities/Comment.entity';
import CommentsId from 'src/blog/comments/domain/value-objects/CommentsId.vo';
import CustomDate from 'src/shared/domain/value-objects/CustomDate.vo';

@Injectable()
export default class SearchComments {
  commentsRepository: CommentsRepository;

  constructor(
    @InjectRepository(Comment) commentsRepository: CommentsRepository,
  ) {
    this.commentsRepository = commentsRepository;
  }

  async execute(postId): Promise<Comment> {
    PostsId.of(postId);

    await this.commentsRepository.add(comment);
    return comment;
  }
}

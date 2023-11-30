import { Injectable } from '@nestjs/common';
import Comment from 'src/blog/comments/domain/entities/Comment.entity';
import { CommentsRepository } from 'src/blog/comments/domain/interfaces/Comments.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import CommentsId from 'src/blog/comments/domain/value-objects/CommentsId.vo';
import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';
import CustomDate from 'src/shared/domain/value-objects/CustomDate.vo';

@Injectable()
export default class CreateComments {
  commentsRepository: CommentsRepository;

  constructor(
    @InjectRepository(Comment) commentsRepository: CommentsRepository,
  ) {
    this.commentsRepository = commentsRepository;
  }

  async execute(author, content, postId): Promise<Comment | null> {
    try {
      const comment = Comment.create(
        CommentsId.generate(),
        PostsId.of(postId),
        author,
        content,
        CustomDate.generate(),
      );

      return this.commentsRepository.add(comment);
    } catch (error) {
      return error;
    }
  }
}

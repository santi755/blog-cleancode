import { Injectable } from '@nestjs/common';
import Comments from 'src/blog/comments/domain/entities/Comments.entity';
import { CommentsRepository } from 'src/blog/comments/domain/interfaces/Comments.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import CommentsId from 'src/blog/comments/domain/value-objects/CommentsId.vo';
import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';
import CustomDate from 'src/shared/domain/value-objects/CustomDate.vo';

@Injectable()
export class CreateCommentsService {
  commentsRepository: CommentsRepository;

  constructor(
    @InjectRepository(Comments) commentsRepository: CommentsRepository,
  ) {
    this.commentsRepository = commentsRepository;
  }

  async create(author, content, postId): Promise<Comments | null> {
    try {
      const comment = Comments.create(
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

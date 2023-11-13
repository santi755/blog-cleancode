import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import Comments from 'src/blog/comments/domain/entities/Comments.entity';
import {
  CommentsRepository,
  CreateCommentsParams,
} from 'src/blog/comments/domain/interfaces/Comments.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreateCommentsService {
  commentsRepository: CommentsRepository;

  constructor(
    @InjectRepository(Comments) commentsRepository: CommentsRepository,
  ) {
    this.commentsRepository = commentsRepository;
  }

  async create({
    postId,
    content,
    author,
  }: CreateCommentsParams): Promise<Comments> {
    try {
      const comment = new Comments({
        id: null,
        postId: postId,
        createdAt: new Date(),
        author: author,
        content: content,
      });

      return this.commentsRepository.add(comment);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Error creating comment.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

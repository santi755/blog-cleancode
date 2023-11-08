import { Posts } from 'src/bounded-contexts/blog/domain/entities/posts/posts.entity';
import { PostsRepository } from 'src/bounded-contexts/blog/domain/interfaces/repositories/posts.repository.interface';
import { Injectable } from '@nestjs/common';
//import { CreateCommentsDto } from 'src/bounded-contexts/blog/domain/dtos/comments/CreateComments.dto';
import { Comments } from 'src/bounded-contexts/blog/domain/entities/comments/comments.entity';
import { CreateCommentsDto } from 'src/bounded-contexts/blog/domain/dtos/comments/CreateComments.dto';
import { CommentsRepository } from 'src/bounded-contexts/blog/domain/interfaces/repositories/comments.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreateCommentsService {
  commentsRepository: CommentsRepository;

  constructor(
    @InjectRepository(Comments) commentsRepository: CommentsRepository,
    @InjectRepository(Posts) private postsRepository: PostsRepository,
  ) {
    this.commentsRepository = commentsRepository;
  }

  async create(createCommentsDto: CreateCommentsDto): Promise<Comments> {
    try {
      return this.commentsRepository.add(createCommentsDto);
    } catch (error) {
      throw new Error(error);
    }
  }
}

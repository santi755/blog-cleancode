import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostsRepository } from 'src/bounded-contexts/blog/domain/interfaces/repositories/posts.repository.interface';
import { Posts } from 'src/bounded-contexts/blog/domain/entities/posts/posts.entity';

@Injectable()
export class EliminatePostsService {
  postsRepository: PostsRepository;

  constructor(@InjectRepository(Posts) postsRepository: PostsRepository) {
    this.postsRepository = postsRepository;
  }

  eliminate(postId: string): Promise<void> {
    try {
      return this.postsRepository.eliminate(postId);
    } catch (error) {
      throw new Error(error);
    }
  }
}

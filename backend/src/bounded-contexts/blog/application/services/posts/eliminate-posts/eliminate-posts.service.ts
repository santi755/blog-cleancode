import { Injectable } from '@nestjs/common';
import { EliminatePostDto } from 'src/bounded-contexts/blog/domain/dtos/posts/eliminatePosts.dto';
import { PostsRepository } from 'src/bounded-contexts/blog/domain/interfaces/repositories/posts.repository.interface';
import { PostsService } from '../posts.service';

@Injectable()
export class EliminatePostsService extends PostsService {
  postsRepository: PostsRepository;

  eliminate(postId: string): Promise<void> {
    try {
      return this.postsRepository.eliminate(postId);
    } catch (error) {
      throw new Error(error);
    }
  }
}

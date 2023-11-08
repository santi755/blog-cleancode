import { Injectable } from '@nestjs/common';
import { PostsService } from '../Posts.service';

@Injectable()
export class EliminatePostsService extends PostsService {
  eliminate(postId: string): Promise<void> {
    try {
      return this.postsRepository.eliminate(postId);
    } catch (error) {
      throw new Error(error);
    }
  }
}

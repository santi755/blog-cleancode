import { Injectable } from '@nestjs/common';
import { Posts } from 'src/bounded-contexts/blog/domain/entities/posts/posts.entity';
import { PostsRepository } from 'src/bounded-contexts/blog/domain/interfaces/repositories/posts.repository.interface';
import { PostsService } from '../posts.service';

@Injectable()
export class SearchPostsService extends PostsService {
  postsRepository: PostsRepository;

  search(id: string): Promise<Posts> {
    return this.postsRepository.search(id);
  }
}

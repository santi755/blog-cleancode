import { Injectable } from '@nestjs/common';
import { Posts } from 'src/bounded-contexts/blog/domain/entities/posts/posts.entity';
import { PostsService } from '../Posts.service';

@Injectable()
export class SearchPostsService extends PostsService {
  search(id: string): Promise<Posts> {
    return this.postsRepository.search(id);
  }
}

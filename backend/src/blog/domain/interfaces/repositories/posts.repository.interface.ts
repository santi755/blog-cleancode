import { Posts } from 'src/blog/domain/entities/posts/posts.entity';

export interface PostsRepository {
  search(id: string): Promise<Posts | null>;
}

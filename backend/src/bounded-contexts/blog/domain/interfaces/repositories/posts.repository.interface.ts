import { Posts } from 'src/bounded-contexts/blog/domain/entities/posts/posts.entity';

export interface PostsRepository {
  search(id: string): Promise<Posts | null>;
}

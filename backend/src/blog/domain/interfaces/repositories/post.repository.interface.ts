import { Post } from '../../entities/post/post.entity';

export interface PostRepository {
  search(id: string): Promise<Post | null>;
}

import { Posts } from 'src/bounded-contexts/blog/domain/entities/posts/posts.entity';
import { CreatePostsDto } from 'src/bounded-contexts/blog/domain/dtos/posts/createPosts.dto';

export interface PostsRepository {
  search(id: string): Promise<Posts | null>;
  add(createPostsDto: CreatePostsDto): Promise<Posts>;
}

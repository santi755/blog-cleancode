import { Posts } from 'src/bounded-contexts/blog/domain/entities/posts/posts.entity';
import { CreatePostsDto } from 'src/bounded-contexts/blog/domain/dtos/posts/createPosts.dto';
import { EditPostsDto } from 'src/bounded-contexts/blog/domain/dtos/posts/editPosts.dto';

export interface PostsRepository {
  search(id: string): Promise<Posts | null>;
  add(createPostsDto: CreatePostsDto): Promise<Posts>;
  edit(editPostsDto: EditPostsDto): Promise<Posts>;
}

import { Posts } from 'src/blog/posts/domain/entities/posts.entity';
import { CreatePostsDto } from 'src/blog/posts/domain/dtos/createPosts.dto';
import { EditPostsDto } from 'src/blog/posts/domain/dtos/editPosts.dto';

export interface PostsRepository {
  search(id: string): Promise<Posts | null>;
  add(createPostsDto: CreatePostsDto): Promise<Posts>;
  edit(editPostsDto: EditPostsDto): Promise<Posts>;
  eliminate(id: string): Promise<void>;
}

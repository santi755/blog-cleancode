import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';
import Posts from 'src/blog/posts/domain/entities/Posts.entity';

export interface CreatePostsParams {
  title: string;
  content: string;
  status: string;
}

export interface EditPostsParams {
  id: string;
  title: string;
  content: string;
  status: string;
}

export interface PostsRepository {
  search(id: PostsId): Promise<Posts | null>;
  add(post: Posts): Promise<Posts>;
  edit(post: Posts): Promise<Posts>;
  eliminate(post: Posts): Promise<void>;
}

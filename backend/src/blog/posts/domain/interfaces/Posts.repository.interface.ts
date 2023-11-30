import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';
import Post from 'src/blog/posts/domain/entities/Post.entity';

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
  search(id: PostsId): Promise<Post | null>;
  add(post: Post): Promise<Post>;
  edit(post: Post): Promise<Post>;
  eliminate(post: Post): Promise<void>;
}

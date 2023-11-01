import { Post } from '../../entities/post/post.entity';

export interface IPostRepository {
  findPostById(id: number): Promise<Post | null>;
  /*
    findPostBySlug(slug: string): Promise<Post>;
    findAllPosts(): Promise<Post[]>;
    createPost(post: Post): Promise<Post>;
    updatePost(post: Post): Promise<Post>;
    deletePost(id: number): Promise<void>;
    */
}

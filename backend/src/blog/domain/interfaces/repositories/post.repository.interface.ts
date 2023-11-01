import { Post } from '../../entities/post/post.entity';

export interface PostRepository {
    findPostById(id: number): Promise<Post>;
    /*
    findPostBySlug(slug: string): Promise<Post>;
    findAllPosts(): Promise<Post[]>;
    createPost(post: Post): Promise<Post>;
    updatePost(post: Post): Promise<Post>;
    deletePost(id: number): Promise<void>;
    */
}

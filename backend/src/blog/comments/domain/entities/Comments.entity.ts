import CommentsId from 'src/blog/comments/domain/value-objects/CommentsId.vo';
import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';

export default class Comments {
  readonly id: CommentsId;
  readonly postId: PostsId;
  readonly author: string;
  readonly content: string;
  readonly createdAt: Date;

  constructor({
    id,
    postId,
    author,
    content,
    createdAt,
  }: {
    id: CommentsId;
    postId: PostsId;
    author: string;
    content: string;
    createdAt: Date;
  }) {
    this.id = id;
    this.postId = postId;
    this.author = author;
    this.content = content;
    this.createdAt = createdAt;
  }
}

import CommentsId from 'src/blog/comments/domain/value-objects/CommentsId.vo';
import CustomDate from 'src/shared/domain/value-objects/CustomDate.vo';
import Post from 'src/blog/posts/domain/entities/Post.entity';

export default class Comment {
  id: CommentsId;
  post: Post;
  author: string;
  content: string;
  createdAt: CustomDate;

  constructor(
    id: CommentsId,
    post: Post,
    author: string,
    content: string,
    createdAt: CustomDate,
  ) {
    this.id = id;
    this.post = post;
    this.author = author;
    this.content = content;
    this.createdAt = createdAt;
  }

  static create(id, postId, author, content, createdAt): Comment {
    return new Comment(id, postId, author, content, createdAt);
  }
}

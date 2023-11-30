import CommentsId from 'src/blog/comments/domain/value-objects/CommentsId.vo';
import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';
import CustomDate from 'src/shared/domain/value-objects/CustomDate.vo';

export default class Comment {
  constructor(
    private id: CommentsId,
    private postId: PostsId,
    private author: string,
    private content: string,
    private createdAt: CustomDate,
  ) {}

  static create(id, postId, author, content, createdAt): Comment {
    return new Comment(id, postId, author, content, createdAt);
  }
}

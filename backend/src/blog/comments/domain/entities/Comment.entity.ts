import CommentsId from 'src/blog/comments/domain/value-objects/CommentsId.vo';
import CustomDate from 'src/shared/domain/value-objects/CustomDate.vo';
import AggregateRoot from 'src/shared/domain/aggregate/AggregateRoot';
import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';

export default class Comment extends AggregateRoot {
  constructor(
    public id: CommentsId,
    public post: PostsId,
    public author: string,
    public content: string,
    public createdAt: CustomDate,
  ) {
    super();
  }

  static create(id, postId, author, content, createdAt): Comment {
    return new Comment(id, postId, author, content, createdAt);
  }
}

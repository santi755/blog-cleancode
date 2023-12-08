import CommentsId from 'src/blog/comments/domain/value-objects/CommentsId.vo';
import CustomDate from 'src/shared/domain/value-objects/CustomDate.vo';
import AggregateRoot from 'src/shared/domain/aggregate/AggregateRoot';
import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';

export default class Comment extends AggregateRoot {
  id: CommentsId;
  post: PostsId;
  author: string;
  content: string;
  createdAt: CustomDate;

  constructor(
    id: CommentsId,
    post: PostsId,
    author: string,
    content: string,
    createdAt: CustomDate,
  ) {
    super();

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

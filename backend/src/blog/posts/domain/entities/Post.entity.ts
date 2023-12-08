import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';
import PostsStatus from 'src/blog/posts/domain/value-objects/PostsStatus.vo';
import CustomDate from 'src/shared/domain/value-objects/CustomDate.vo';
import AggregateRoot from 'src/shared/domain/aggregate/AggregateRoot';
import Comment from 'src/blog/comments/domain/entities/Comment.entity';

export default class Post extends AggregateRoot {
  id: PostsId;
  publishedAt: CustomDate;
  editedAt: CustomDate;
  title: string;
  content: string;
  status: PostsStatus;
  comments?: Comment[] | null;

  constructor(
    id: PostsId,
    publishedAt: CustomDate,
    editedAt: CustomDate,
    title: string,
    content: string,
    status: PostsStatus,
    comments?: Comment[] | null,
  ) {
    super();

    this.id = id;
    this.publishedAt = publishedAt;
    this.editedAt = editedAt;
    this.title = title;
    this.content = content;
    this.status = status;
    this.comments = comments;
  }

  static create(
    id: PostsId,
    publishedAt: CustomDate,
    editedAt: CustomDate,
    title: string,
    content: string,
    status: PostsStatus,
  ): Post {
    return new Post(id, publishedAt, editedAt, title, content, status);
  }
}

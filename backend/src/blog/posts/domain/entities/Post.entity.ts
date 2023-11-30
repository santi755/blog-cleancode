import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';
import PostsStatus from 'src/blog/posts/domain/value-objects/PostsStatus.vo';
import CustomDate from 'src/shared/domain/value-objects/CustomDate.vo';
import AggregateRoot from 'src/shared/domain/aggregate/AggregateRoot';
import Comment from 'src/blog/comments/domain/entities/Comment.entity';

export default class Post extends AggregateRoot {
  constructor(
    private id: PostsId,
    private publishedAt: CustomDate,
    private editedAt: CustomDate,
    private title: string,
    private content: string,
    private status: PostsStatus,
    private comments?: Comment[] | null,
  ) {
    super();
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

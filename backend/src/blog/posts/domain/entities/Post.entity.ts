import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';
import PostsStatus from 'src/blog/posts/domain/value-objects/PostsStatus.vo';
import CustomDate from 'src/shared/domain/value-objects/CustomDate.vo';
import AggregateRoot from 'src/shared/domain/aggregate/AggregateRoot';
import Comment from 'src/blog/comments/domain/entities/Comment.entity';

export default class Post extends AggregateRoot {
  constructor(
    public id: PostsId,
    public publishedAt: CustomDate,
    public editedAt: CustomDate,
    public title: string,
    public content: string,
    public status: PostsStatus,
    public comments?: Comment[] | null,
    public likes?: number,
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
    likes?: number,
  ): Post {
    return new Post(
      id,
      publishedAt,
      editedAt,
      title,
      content,
      status,
      null,
      likes,
    );
  }
}

import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';
import PostsStatus from 'src/blog/posts/domain/value-objects/PostsStatus.vo';
import CustomDate from 'src/shared/domain/value-objects/CustomDate.vo';
// import Comments from 'src/blog/comments/domain/entities/Comments.entity';

export default class Posts {
  id: PostsId;
  publishedAt: CustomDate;
  editedAt: CustomDate;
  title: string;
  content: string;
  status: PostsStatus;
  //comments: Comments[];

  constructor(
    id: PostsId,
    publishedAt: CustomDate,
    editedAt: CustomDate,
    title: string,
    content: string,
    status: PostsStatus,
  ) {
    this.id = id;
    this.publishedAt = publishedAt;
    this.editedAt = editedAt;
    this.title = title;
    this.content = content;
    this.status = status;
    //this.comments = comments;
  }

  static create(
    id: PostsId,
    publishedAt: CustomDate,
    editedAt: CustomDate,
    title: string,
    content: string,
    status: PostsStatus,
  ): Posts {
    return new Posts(id, publishedAt, editedAt, title, content, status);
  }
}

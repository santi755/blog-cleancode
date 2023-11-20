import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';
import PostsStatus from 'src/blog/posts/domain/value-objects/PostsStatus.vo';
import Comments from 'src/blog/comments/domain/entities/Comments.entity';

export default class Posts {
  id: PostsId;
  publishedAt: Date;
  editedAt: Date;
  title: string;
  content: string;
  status: PostsStatus;
  //comments: Comments[];

  constructor({
    id,
    publishedAt,
    editedAt,
    title,
    content,
    status, //comments = [],
  }: {
    id: string | null;
    publishedAt: Date;
    editedAt: Date;
    title: string;
    content: string;
    status: string;
    //comments?: Comments[];
  }) {
    this.id = id ? PostsId.of(id) : PostsId.generate();
    this.publishedAt = publishedAt;
    this.editedAt = editedAt;
    this.title = title;
    this.content = content;
    this.status = PostsStatus.of(status);
    //this.comments = comments;
  }

  static create({
    id,
    publishedAt,
    editedAt,
    title,
    content,
    status, //comments = [],
  }: {
    id: string | null;
    publishedAt: Date;
    editedAt: Date;
    title: string;
    content: string;
    status: string;
    //comments?: Comments[];
  }): Posts {
    return new Posts({
      id,
      publishedAt,
      editedAt,
      title,
      content,
      status,
      //comments,
    });
  }
}

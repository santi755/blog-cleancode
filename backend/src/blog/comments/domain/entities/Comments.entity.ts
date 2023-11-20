import CommentsId from 'src/blog/comments/domain/value-objects/CommentsId.vo';
import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';
import CustomDate from 'src/shared/domain/value-objects/CustomDate.vo';

export default class Comments {
  id: CommentsId;
  postId: PostsId;
  author: string;
  content: string;
  createdAt: CustomDate;

  constructor(
    id: CommentsId,
    postId: PostsId,
    author: string,
    content: string,
    createdAt: CustomDate,
  ) {
    this.id = id;
    this.postId = postId;
    this.author = author;
    this.content = content;
    this.createdAt = createdAt;
  }
}

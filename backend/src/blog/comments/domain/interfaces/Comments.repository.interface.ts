import CommentsId from 'src/blog/comments/domain/value-objects/CommentsId.vo';
import Comments from 'src/blog/comments/domain/entities/Comments.entity';

export interface CreateCommentsParams {
  postId: string;
  content: string;
  author: string;
}

export interface CommentsRepository {
  search: (id: CommentsId) => Promise<Comments | null>;
  add: (comment: Comments) => Promise<Comments>;
}

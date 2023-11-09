import { Comments } from 'src/blog/comments/domain/entities/Comments.entity';

export interface CreateCommentsParams {
  postId: string;
  content: string;
  author: string;
}

export interface CommentsRepository {
  search: (id: string) => Promise<Comments | null>;
  add: (comment: Comments) => Promise<Comments>;
}

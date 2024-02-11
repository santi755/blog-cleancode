import CommentsId from 'src/blog/comments/domain/value-objects/CommentsId.vo';
import Comment from 'src/blog/comments/domain/entities/Comment.entity';

export interface CommentsRepository {
  search: (id: CommentsId) => Promise<Comment | null>;
  add: (comment: Comment) => Promise<Comment>;
  findByCriteria: (criteria: any) => Promise<Comment[]>;
}

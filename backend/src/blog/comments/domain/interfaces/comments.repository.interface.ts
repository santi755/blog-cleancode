import { Comments } from 'src/blog/comments/domain/entities/comments.entity';
import { CreateCommentsDto } from 'src/blog/comments/domain/dtos/CreateComments.dto';

export interface CommentsRepository {
  search: (id: string) => Promise<Comments | null>;
  add: (createCommentsDto: CreateCommentsDto) => Promise<Comments>;
}

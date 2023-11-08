import { Comments } from 'src/bounded-contexts/blog/domain/entities/comments/comments.entity';
import { CreateCommentsDto } from 'src/bounded-contexts/blog/domain/dtos/comments/CreateComments.dto';

export interface CommentsRepository {
  search: (id: string) => Promise<Comments | null>;
  add: (createCommentsDto: CreateCommentsDto) => Promise<Comments>;
}

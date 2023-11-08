import { Injectable } from '@nestjs/common';
//import { CreateCommentsDto } from 'src/bounded-contexts/blog/domain/dtos/comments/CreateComments.dto';
import { Comments } from 'src/bounded-contexts/blog/domain/entities/comments/comments.entity';
import { CommentsService } from '../Comments.service';

@Injectable()
export class SearchCommentsService extends CommentsService {
  search(commentId: string): Promise<Comments> {
    try {
      return this.commentsRepository.search(commentId);
    } catch (error) {
      throw new Error(error);
    }
  }
}

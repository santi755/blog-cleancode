import Comments from 'src/blog/comments/domain/entities/Comments.entity';
import { TypeOrmComments } from 'src/blog/comments/infrastructure/domain/TypeOrmComments.schema';

export class TypeOrmCommentsMapper {
  static mapToDomainEntity(comment: null): null {
    return null;
  }

  static mapToOrmEntity(comment: null): null {
    return null;
  }
}

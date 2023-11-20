import { TypeOrmCommentsMapper } from 'src/blog/comments/infrastructure/mappers/TypeOrmCommentsMapper.mapper';
import Posts from 'src/blog/posts/domain/entities/Posts.entity';
import { TypeOrmPosts } from 'src/blog/posts/infrastructure/domain/TypeOrmPosts.schema';
import { TypeOrmComments } from 'src/blog/comments/infrastructure/domain/TypeOrmComments.schema';

export class TypeOrmPostsMapper {
  static mapToDomainEntity(post: any): null {
    return null;
  }

  static mapToOrmEntity(post: any): null {
    return null;
  }
}

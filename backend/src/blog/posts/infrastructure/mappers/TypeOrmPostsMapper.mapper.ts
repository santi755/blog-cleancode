import { TypeOrmCommentsMapper } from 'src/blog/comments/infrastructure/mappers/TypeOrmCommentsMapper.mapper';
import { Posts } from 'src/blog/posts/domain/entities/Posts.entity';
import { TypeOrmPosts } from 'src/blog/posts/infrastructure/domain/TypeOrmPosts.schema';
import { TypeOrmComments } from 'src/blog/comments/infrastructure/domain/TypeOrmComments.schema';

export class TypeOrmPostsMapper {
  static mapToDomainEntity(post: TypeOrmPosts): Posts {
    return new Posts({
      id: post.id,
      publishedAt: post.publishedAt,
      editedAt: post.editedAt,
      title: post.title,
      content: post.content,
      status: post.status,
    });
  }

  static mapToOrmEntity(post: Posts): TypeOrmPosts {
    // TODO: Refactor this. No one is going to understand this.
    const ormComments: TypeOrmComments[] = post.commentsValue
      ? post.commentsValue.map((comment) => {
          return TypeOrmCommentsMapper.mapToOrmEntity(comment);
        })
      : [];

    return {
      id: post.idValue,
      publishedAt: post.publishedAtValue,
      editedAt: post.editedAtValue,
      title: post.titleValue,
      content: post.contentValue,
      status: post.statusValue,
      comments: ormComments,
    };
  }
}

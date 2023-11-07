import { TypeOrmCommentsMapper } from 'src/bounded-contexts/blog/infrastructure/mappers/comments/comments.mapper';
import { Posts } from 'src/bounded-contexts/blog/domain/entities/posts/posts.entity';
import { TypeOrmPosts } from 'src/bounded-contexts/blog/infrastructure/domain/entities/posts/typeOrmPosts.schema';
import { TypeOrmComments } from 'src/bounded-contexts/blog/infrastructure/domain/entities/comments/typeOrmComments.schema';

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

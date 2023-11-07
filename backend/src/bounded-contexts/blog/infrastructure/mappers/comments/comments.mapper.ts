import { Comments } from 'src/bounded-contexts/blog/domain/entities/comment/comment.entity';
import { TypeOrmComments } from 'src/bounded-contexts/blog/infrastructure/domain/entities/comments/typeOrmComments.schema';

export class TypeOrmCommentsMapper {
  static mapToDomainEntity(comment: TypeOrmComments) {
    return new Comments({
      id: comment.id,
      postId: comment.post ? comment.post.id : null,
      author: comment.author,
      content: comment.content,
      createdAt: comment.createdAt,
    });
  }

  static mapToOrmEntity(comment: Comments): TypeOrmComments {
    return {
      id: comment.idValue,
      post: null, // TODO: Check how to return the post
      author: comment.authorValue,
      content: comment.contentValue,
      createdAt: comment.createdAtValue,
    };
  }
}

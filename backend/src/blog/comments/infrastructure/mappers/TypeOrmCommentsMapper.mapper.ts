import Comments from 'src/blog/comments/domain/entities/Comments.entity';
import { TypeOrmComments } from 'src/blog/comments/infrastructure/domain/TypeOrmComments.schema';

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
      postId: comment.postIdValue,
      author: comment.authorValue,
      content: comment.contentValue,
      createdAt: comment.createdAtValue,
    };
  }
}

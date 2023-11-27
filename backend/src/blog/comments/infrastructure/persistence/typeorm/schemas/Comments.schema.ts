import Comments from 'src/blog/comments/domain/entities/Comments.entity';
import CommentsId from 'src/blog/comments/domain/value-objects/CommentsId.vo';
import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';
import CustomDate from 'src/shared/domain/value-objects/CustomDate.vo';
import { EntitySchema } from 'typeorm';
import { ValueObjectTransformer } from 'src/shared/infrastructure/persistence/typeorm/transformers/ValueObjectTransformer';

export default new EntitySchema<Comments>({
  name: Comments.name,
  tableName: 'comments',
  target: Comments,
  columns: {
    id: {
      type: String,
      primary: true,
      transformer: ValueObjectTransformer(CommentsId),
    },
    createdAt: {
      type: Date,
      transformer: ValueObjectTransformer(CustomDate),
    },
    postId: {
      type: String,
      transformer: ValueObjectTransformer(PostsId),
    },
    author: {
      type: String,
    },
    content: {
      type: String,
    },
  },
});

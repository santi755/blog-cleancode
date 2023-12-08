import Comment from 'src/blog/comments/domain/entities/Comment.entity';
import CommentsId from 'src/blog/comments/domain/value-objects/CommentsId.vo';
import CustomDate from 'src/shared/domain/value-objects/CustomDate.vo';
import { EntitySchema } from 'typeorm';
import { ValueObjectTransformer } from 'src/shared/infrastructure/persistence/typeorm/transformers/ValueObjectTransformer';
import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';

export default new EntitySchema<Comment>({
  name: 'Comment',
  tableName: 'comments',
  target: Comment,
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
    author: {
      type: String,
    },
    content: {
      type: String,
    },
    post: {
      type: String,
      transformer: ValueObjectTransformer(PostsId),
    },
  },
  /*
  relations: {
    post: {
      target: 'Post',
      type: 'many-to-one',
      joinColumn: true,
      cascade: true,
      eager: false,
      inverseSide: 'comments',
    },
  },
  */
});

import Comment from 'src/blog/comments/domain/entities/Comment.entity';
import CommentsId from 'src/blog/comments/domain/value-objects/CommentsId.vo';
import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';
import CustomDate from 'src/shared/domain/value-objects/CustomDate.vo';
import { EntitySchema } from 'typeorm';
import { ValueObjectTransformer } from 'src/shared/infrastructure/persistence/typeorm/transformers/ValueObjectTransformer';

export default new EntitySchema<Comment>({
  name: Comment.name,
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
    post: {
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
  relations: {
    post: {
      type: 'many-to-one',
      target: 'Post',
      joinColumn: {
        name: 'post',
      },
    },
  },
});
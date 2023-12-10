import PostsStatus from 'src/blog/posts/domain/value-objects/PostsStatus.vo';
import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';
import Post from 'src/blog/posts/domain/entities/Post.entity';
import { EntitySchema } from 'typeorm';
import CustomDate from 'src/shared/domain/value-objects/CustomDate.vo';
import { ValueObjectTransformer } from 'src/shared/infrastructure/persistence/typeorm/transformers/ValueObjectTransformer';

export default new EntitySchema<Post>({
  name: 'Post',
  tableName: 'posts',
  target: Post,
  columns: {
    id: {
      type: String,
      primary: true,
      transformer: ValueObjectTransformer(PostsId),
    },
    publishedAt: {
      type: Date,
      transformer: ValueObjectTransformer(CustomDate),
    },
    editedAt: {
      type: Date,
      transformer: ValueObjectTransformer(CustomDate),
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    status: {
      type: String,
      transformer: ValueObjectTransformer(PostsStatus),
    },
  },
  /*
  relations: {
    comments: {
      target: 'Comment',
      type: 'one-to-many',
      inverseSide: 'post',
      cascade: true,
    },
  },
  */
});

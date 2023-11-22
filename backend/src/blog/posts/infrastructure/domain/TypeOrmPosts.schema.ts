import PostsStatus from 'src/blog/posts/domain/value-objects/PostsStatus.vo';
import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';
import Posts from 'src/blog/posts/domain/entities/Posts.entity';
import { EntitySchema } from 'typeorm';
import CustomDate from 'src/shared/domain/value-objects/CustomDate.vo';

export const TypeOrmPosts = new EntitySchema<Posts>({
  name: Posts.name,
  tableName: 'posts',
  target: Posts,
  columns: {
    id: {
      type: String,
      primary: true,
      transformer: {
        from: (value: string) => PostsId.of(value),
        to: (value: PostsId) => value.value,
      },
    },
    publishedAt: {
      type: Date,
      transformer: {
        from: (value: Date) => CustomDate.of(value),
        to: (value: CustomDate) => value.value,
      },
    },
    editedAt: {
      type: Date,
      transformer: {
        from: (value: Date) => CustomDate.of(value),
        to: (value: CustomDate) => value.value,
      },
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    status: {
      type: String,
      transformer: {
        from: (value: string) => PostsStatus.of(value),
        to: (value: PostsStatus) => value.value,
      },
    },
  },
});

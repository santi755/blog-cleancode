import Comments from 'src/blog/comments/domain/entities/Comments.entity';
import CommentsId from 'src/blog/comments/domain/value-objects/CommentsId.vo';
import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';
import CustomDate from 'src/shared/domain/value-objects/CustomDate.vo';
import { EntitySchema } from 'typeorm';

export const TypeOrmComments = new EntitySchema({
  name: Comments.name,
  tableName: 'comments',
  // target: Comments,
  columns: {
    id: {
      type: String,
      primary: true,
      transformer: {
        from: (value: string) => CommentsId.of(value),
        to: (value: CommentsId) => value.value,
      },
    },
    createdAt: {
      type: Date,
      transformer: {
        from: (value: Date) => CustomDate.of(value),
        to: (value: CustomDate) => value.value,
      },
    },
    postId: {
      type: String,
      transformer: {
        from: (value: string) => PostsId.of(value),
        to: (value: PostsId) => value.value,
      },
    },
    author: {
      type: String,
    },
    content: {
      type: String,
    },
  },
});

import Comments from 'src/blog/comments/domain/entities/Comments.entity';
import CommentsId from 'src/blog/comments/domain/value-objects/CommentsId.vo';
import { EntitySchema } from 'typeorm';

export const TypeOrmComments = new EntitySchema<Comments>({
  name: Comments.name,
  tableName: 'comments',
  target: Comments,
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
      createDate: true,
    },
    postId: {
      type: String,
    },
    author: {
      type: String,
    },
    content: {
      type: String,
    },
  },
});

/**
 * TODO: Check this way to define the schema
 *  - https://github.com/typeorm/typeorm/issues/10217
 */
/*
@Entity('comments')
export class TypeOrmComments {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @CreateDateColumn()
  public createdAt: Date;

  @Column()
  public author: string;

  @Column()
  public content: string;

  @Column({ type: 'uuid' })
  postId: string;

  @ManyToOne(() => TypeOrmPosts, (post) => post.comments, {
    onDelete: 'CASCADE',
  })
  post?: TypeOrmPosts;
}
*/

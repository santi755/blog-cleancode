import Posts from 'src/blog/posts/domain/entities/Posts.entity';
import { EntitySchema } from 'typeorm';

export const TypeOrmPosts = new EntitySchema<Posts>({
  name: Posts.name,
  tableName: 'posts',
  target: Posts,
  columns: {
    id: {
      type: String,
      primary: true,
    },
    publishedAt: {
      type: Date,
      createDate: true,
    },
    editedAt: {
      type: Date,
      updateDate: true,
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    status: {
      type: String,
    },
  },
});

/**
 * TODO: Check this way to define the schema
 *  - https://github.com/typeorm/typeorm/issues/10217
 */
/*
@Entity('posts')
export class TypeOrmPosts {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @CreateDateColumn()
  public publishedAt: Date;

  @UpdateDateColumn()
  public editedAt: Date;

  @Column()
  public title: string;

  @Column()
  public content: string;

  @Column({
    type: 'enum',
    enum: ['draft', 'published', 'unpublished'],
    default: 'draft',
  })
  status: string;

  @OneToMany(() => TypeOrmComments, (comment) => comment.post)
  comments: TypeOrmComments[];
}
*/

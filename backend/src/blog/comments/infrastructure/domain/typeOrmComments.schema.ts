import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TypeOrmPosts } from 'src/blog/posts/infrastructure/domain/typeOrmPosts.schema';

/**
 * TODO: Check this way to define the schema
 *  - https://github.com/typeorm/typeorm/issues/10217
 */

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

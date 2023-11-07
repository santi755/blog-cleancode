import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TypeOrmPosts } from 'src/bounded-contexts/blog/infrastructure/domain/entities/posts/typeOrmPosts.schema';

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

  @ManyToOne(() => TypeOrmPosts, (post) => post.comments)
  post: TypeOrmPosts;
}

import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TypeOrmComments } from 'src/bounded-contexts/blog/infrastructure/domain/entities/comments/typeOrmComments.schema';

/**
 * TODO: Check this way to define the schema
 *  - https://github.com/typeorm/typeorm/issues/10217
 */

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

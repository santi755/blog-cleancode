import { v4 as uuid } from 'uuid';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Posts } from 'src/bounded-contexts/blog/domain/interfaces/entities/posts.entity.interface';

@Entity()
export class TypeOrmPostsEntity implements Posts {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @CreateDateColumn()
  publishedAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  title: string;

  @Column()
  content: string;

  // TODO: Create a value object for it
  @Column({
    type: 'enum',
    enum: ['draft', 'published', 'unpublished'],
    default: 'draft',
  })
  status: string;

  get idValue(): string {
    return this.id;
  }

  get publishedAtValue(): Date {
    return this.publishedAt;
  }

  get updatedAtValue(): Date {
    return this.updatedAt;
  }

  get titleValue(): string {
    return this.title;
  }

  get contentValue(): string {
    return this.content;
  }

  get statusValue(): string {
    return this.status;
  }
}

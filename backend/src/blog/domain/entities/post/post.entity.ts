import { v4 as uuid } from 'uuid';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Post {
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
}

/**
 * TODO: Use this class instead of the one above
 *
 * import { v4 as uuid } from 'uuid';

export class Post {
  private readonly id: string;
  private publishedAt: Date;
  private updatedAt: Date;
  private title: string;
  private content: string;
  private status: string;

  constructor(
    id: string,
    publishedAt: Date,
    updatedAt: Date,
    title: string,
    content: string,
    status: string,
  ) {
    this.id = id ?? uuid();
    this.publishedAt = publishedAt;
    this.updatedAt = updatedAt;
    this.title = title;
    this.content = content;
    this.status = status;
  }

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

 */

import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('posts')
export class TypeOrmPosts {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @CreateDateColumn()
  public publishedAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

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
}

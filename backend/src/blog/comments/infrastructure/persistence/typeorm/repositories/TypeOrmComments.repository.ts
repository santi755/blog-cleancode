import CommentsId from 'src/blog/comments/domain/value-objects/CommentsId.vo';
import { DataSource, Repository } from 'typeorm';
import { CommentsRepository } from 'src/blog/comments/domain/interfaces/Comments.repository.interface';
import { Injectable } from '@nestjs/common';
import Comment from 'src/blog/comments/domain/entities/Comment.entity';

@Injectable()
export class TypeOrmCommentsRepository
  extends Repository<Comment>
  implements CommentsRepository
{
  constructor(private dataSource: DataSource) {
    super(Comment, dataSource.createEntityManager());
  }

  async search(id: CommentsId): Promise<Comment | null> {
    return await this.findOne({ where: { id } } as any);
  }

  async add(comment: Comment): Promise<Comment | null> {
    return await this.save(comment);
  }

  async findByCriteria(criteria: any): Promise<Comment[]> {
    return await this.find(criteria);
  }
}

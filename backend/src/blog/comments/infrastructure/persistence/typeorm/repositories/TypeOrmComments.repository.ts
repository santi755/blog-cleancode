import CommentsId from 'src/blog/comments/domain/value-objects/CommentsId.vo';
import { DataSource, Repository } from 'typeorm';
import { CommentsRepository } from 'src/blog/comments/domain/interfaces/Comments.repository.interface';
import { Injectable } from '@nestjs/common';
import Comments from 'src/blog/comments/domain/entities/Comments.entity';

@Injectable()
export class TypeOrmCommentsRepository
  extends Repository<Comments>
  implements CommentsRepository
{
  constructor(private dataSource: DataSource) {
    super(Comments, dataSource.createEntityManager());
  }

  async search(id: CommentsId): Promise<Comments | null> {
    return await this.findOne({ where: { id } } as any);
  }

  async add(comment: Comments): Promise<Comments | null> {
    return await this.save(comment);
  }
}

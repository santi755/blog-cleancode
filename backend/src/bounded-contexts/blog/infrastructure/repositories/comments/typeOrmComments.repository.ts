import { DataSource, Repository } from 'typeorm';
import { CommentsRepository } from 'src/bounded-contexts/blog/domain/interfaces/repositories/comments.repository.interface';
import { TypeOrmComments } from 'src/bounded-contexts/blog/infrastructure/domain/entities/comments/typeOrmComments.schema';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TypeOrmCommentsRepository
  extends Repository<TypeOrmComments>
  implements CommentsRepository
{
  constructor(private dataSource: DataSource) {
    super(TypeOrmComments, dataSource.createEntityManager());
  }
}

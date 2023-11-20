import { DataSource, Repository } from 'typeorm';
import { CommentsRepository } from 'src/blog/comments/domain/interfaces/Comments.repository.interface';
import { TypeOrmComments } from 'src/blog/comments/infrastructure/domain/TypeOrmComments.schema';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import Comments from 'src/blog/comments/domain/entities/Comments.entity';

@Injectable()
export class TypeOrmCommentsRepository
  extends Repository<Comments>
  implements CommentsRepository
{
  constructor(private dataSource: DataSource) {
    super(TypeOrmComments, dataSource.createEntityManager());
  }

  async search(id: string): Promise<Comments | null> {
    try {
      /*
      const comment = await this.findOneBy({ id });

      if (!comment) {
        return null;
      }

      return TypeOrmCommentsMapper.mapToDomainEntity(comment);
      */
      return null;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Error searching comment.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async add(comment: Comments): Promise<Comments | null> {
    try {
      /*
      const ormComment = TypeOrmCommentsMapper.mapToOrmEntity(comment);
      const createdComment = await this.save(ormComment);

      return TypeOrmCommentsMapper.mapToDomainEntity(createdComment);
      */
      return null;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Error creating comment.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

import { DataSource, Repository } from 'typeorm';
import { CommentsRepository } from 'src/bounded-contexts/blog/domain/interfaces/repositories/comments.repository.interface';
import { TypeOrmComments } from 'src/bounded-contexts/blog/infrastructure/domain/entities/comments/typeOrmComments.schema';
import { Injectable } from '@nestjs/common';
import { CreateCommentsDto } from 'src/bounded-contexts/blog/domain/dtos/comments/CreateComments.dto';
import { Comments } from 'src/bounded-contexts/blog/domain/entities/comments/comments.entity';
import { TypeOrmCommentsMapper } from '../../mappers/comments/comments.mapper';

@Injectable()
export class TypeOrmCommentsRepository
  extends Repository<TypeOrmComments>
  implements CommentsRepository
{
  constructor(private dataSource: DataSource) {
    super(TypeOrmComments, dataSource.createEntityManager());
  }

  async search(id: string): Promise<Comments | null> {
    try {
      const comment = await this.findOneBy({ id });

      if (!comment) {
        return null;
      }

      return TypeOrmCommentsMapper.mapToDomainEntity(comment);
    } catch (error) {
      throw new Error(error);
    }
  }

  async add(createCommentsDto: CreateCommentsDto): Promise<Comments> {
    let comment: Comments;

    try {
      comment = new Comments({
        id: null,
        postId: createCommentsDto.postId,
        createdAt: new Date(),
        author: createCommentsDto.author,
        content: createCommentsDto.content,
      });
    } catch (error) {
      return error;
    }

    const ormComment = TypeOrmCommentsMapper.mapToOrmEntity(comment);
    const createdComment = await this.save(ormComment);
    return TypeOrmCommentsMapper.mapToDomainEntity(createdComment);
  }
}

import { DataSource, Repository } from 'typeorm';
import { CommentsRepository } from 'src/blog/comments/domain/interfaces/comments.repository.interface';
import { TypeOrmComments } from 'src/blog/comments/infrastructure/domain/typeOrmComments.schema';
import { Injectable } from '@nestjs/common';
import { CreateCommentsDto } from 'src/blog/comments/domain/dtos/CreateComments.dto';
import { Comments } from 'src/blog/comments/domain/entities/comments.entity';
import { TypeOrmCommentsMapper } from 'src/blog/comments/infrastructure/mappers/comments.mapper';

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

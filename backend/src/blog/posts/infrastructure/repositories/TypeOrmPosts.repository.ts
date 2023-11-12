import { DataSource, Repository } from 'typeorm';
import { PostsRepository } from 'src/blog/posts/domain/interfaces/Posts.repository.interface';
import { TypeOrmPosts } from 'src/blog/posts/infrastructure/domain/TypeOrmPosts.schema';
import { Posts } from 'src/blog/posts/domain/entities/Posts.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TypeOrmPostsMapper } from 'src/blog/posts/infrastructure/mappers/TypeOrmPostsMapper.mapper';

@Injectable()
export class TypeOrmPostsRepository
  extends Repository<TypeOrmPosts>
  implements PostsRepository
{
  constructor(private dataSource: DataSource) {
    super(TypeOrmPosts, dataSource.createEntityManager());
  }

  async search(id: string): Promise<Posts | null> {
    try {
      const post = await this.findOneBy({ id });

      if (!post) {
        return null;
      }

      return TypeOrmPostsMapper.mapToDomainEntity(post);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Error searching post.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async add(post: Posts): Promise<Posts | null> {
    try {
      const ormPost = TypeOrmPostsMapper.mapToOrmEntity(post);
      const createdPost = await this.save(ormPost);

      return TypeOrmPostsMapper.mapToDomainEntity(createdPost);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Error creating post.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async edit(post: Posts): Promise<Posts | null> {
    try {
      const ormPost = TypeOrmPostsMapper.mapToOrmEntity(post);
      const updatedPost = await this.save(ormPost);

      return TypeOrmPostsMapper.mapToDomainEntity(updatedPost);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Error editing post.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async eliminate(post: Posts): Promise<void> {
    try {
      const ormPost = TypeOrmPostsMapper.mapToOrmEntity(post);
      await this.remove(ormPost);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Error eliminating post.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
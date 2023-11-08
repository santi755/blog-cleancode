import { DataSource, Repository } from 'typeorm';
import { PostsRepository } from 'src/bounded-contexts/blog/domain/interfaces/repositories/posts.repository.interface';
import { TypeOrmPosts } from 'src/bounded-contexts/blog/infrastructure/domain/entities/posts/typeOrmPosts.schema';
import { Posts } from 'src/bounded-contexts/blog/domain/entities/posts/posts.entity';
import { CreatePostsDto } from 'src/bounded-contexts/blog/domain/dtos/posts/createPosts.dto';
import { EditPostsDto } from 'src/bounded-contexts/blog/domain/dtos/posts/editPosts.dto';
import { Injectable } from '@nestjs/common';
import { TypeOrmPostsMapper } from 'src/bounded-contexts/blog/infrastructure/mappers/posts/posts.mapaper';

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
      throw new Error(error);
    }
  }

  async add(createPostsDto: CreatePostsDto): Promise<Posts | null> {
    let post: Posts;
    try {
      post = new Posts({
        id: null,
        publishedAt: new Date(),
        editedAt: new Date(),
        title: createPostsDto.title,
        content: createPostsDto.content,
        status: createPostsDto.status,
      });
    } catch (error) {
      return error;
    }

    const ormPost = TypeOrmPostsMapper.mapToOrmEntity(post);
    const createdPost = await this.save(ormPost);
    return TypeOrmPostsMapper.mapToDomainEntity(createdPost);
  }

  async edit(editPostsDto: EditPostsDto): Promise<Posts | null> {
    let post: Posts;
    try {
      post = await this.search(editPostsDto.id);
      post.titleValue = editPostsDto.title;
      post.contentValue = editPostsDto.content;
      post.statusValue = editPostsDto.status;
      post.editedAtValue = editPostsDto.editedAt;

      if (!post) {
        return null;
      }
    } catch (error) {
      return error;
    }

    const ormPost = TypeOrmPostsMapper.mapToOrmEntity(post);
    const updatedPost = await this.save(ormPost);
    return TypeOrmPostsMapper.mapToDomainEntity(updatedPost);
  }

  async eliminate(id: string): Promise<void> {
    let post: Posts;
    try {
      post = await this.search(id);

      if (!post) {
        return null;
      }
    } catch (error) {
      return error;
    }

    const ormPost = TypeOrmPostsMapper.mapToOrmEntity(post);
    await this.remove(ormPost);
  }
}

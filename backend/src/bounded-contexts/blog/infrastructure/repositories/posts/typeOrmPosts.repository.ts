import { DataSource, Repository } from 'typeorm';
import { PostsRepository } from 'src/bounded-contexts/blog/domain/interfaces/repositories/posts.repository.interface';
import { TypeOrmPosts } from 'src/bounded-contexts/blog/infrastructure/domain/entities/posts/typeOrmPosts.schema';
import { Posts } from 'src/bounded-contexts/blog/domain/entities/posts/posts.entity';
import { Injectable } from '@nestjs/common';

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

      return this.mapToDomainEntity(post);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  private mapToDomainEntity(post: TypeOrmPosts): Posts {
    return new Posts({
      id: post.id,
      publishedAt: post.publishedAt,
      updatedAt: post.updatedAt,
      title: post.title,
      content: post.content,
      status: post.status,
    });
  }

  private mapToOrmEntity(post: Posts): TypeOrmPosts {
    return {
      id: post.idValue,
      publishedAt: post.publishedAtValue,
      updatedAt: post.updatedAtValue,
      title: post.titleValue,
      content: post.contentValue,
      status: post.statusValue,
    };
  }
}

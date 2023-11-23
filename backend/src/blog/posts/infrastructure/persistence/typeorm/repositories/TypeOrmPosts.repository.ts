import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';
import { DataSource, Repository } from 'typeorm';
import { PostsRepository } from 'src/blog/posts/domain/interfaces/Posts.repository.interface';
import Posts from 'src/blog/posts/domain/entities/Posts.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TypeOrmPostsRepository
  extends Repository<Posts>
  implements PostsRepository
{
  constructor(private dataSource: DataSource) {
    super(Posts, dataSource.createEntityManager());
  }

  async search(id: PostsId): Promise<Posts | null> {
    return await this.findOne({ where: { id } } as any);
  }

  async add(post: Posts): Promise<Posts | null> {
    return await this.save(post);
  }

  async edit(post: Posts): Promise<Posts | null> {
    return await this.save(post);
  }

  async eliminate(post: Posts): Promise<void> {
    await this.remove(post);
  }
}

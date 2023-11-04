import { DataSource, Repository } from 'typeorm';
import { PostsRepository } from 'src/bounded-contexts/blog/domain/interfaces/repositories/posts.repository.interface';
import { Posts } from 'src/bounded-contexts/blog/domain/entities/posts/posts.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TypeOrmPostsRepository
  extends Repository<Posts>
  implements PostsRepository
{
  constructor(private dataSource: DataSource) {
    super(Posts, dataSource.createEntityManager());
  }

  // TODO: change Post to PostEntity using a mappe
  async search(id: string): Promise<Posts | null> {
    try {
      const post = await this.findOneBy({ id });
      return post;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

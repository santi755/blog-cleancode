import { DataSource, Repository } from 'typeorm';
import { PostRepository } from 'src/blog/domain/interfaces/repositories/post.repository.interface';
import { Post } from 'src/blog/domain/entities/post/post.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TypeOrmPostRepository
  extends Repository<Post>
  implements PostRepository
{
  constructor(private dataSource: DataSource) {
    super(Post, dataSource.createEntityManager());
  }

  // TODO: change Post to PostEntity using a mappe
  async search(id: string): Promise<Post | null> {
    try {
      const post = await this.findOneBy({ id });
      return post;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

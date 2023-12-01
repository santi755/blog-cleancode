import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';
import { DataSource, Repository } from 'typeorm';
import { PostsRepository } from 'src/blog/posts/domain/interfaces/Posts.repository.interface';
import Post from 'src/blog/posts/domain/entities/Post.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TypeOrmPostsRepository
  extends Repository<Post>
  implements PostsRepository
{
  constructor(private dataSource: DataSource) {
    super(Post, dataSource.createEntityManager());
  }

  async search(id: PostsId): Promise<Post | null> {
    return await this.findOne({ where: { id } } as any);
  }

  async add(post: Post): Promise<Post | null> {
    return await this.save(post);
  }

  async edit(post: Post): Promise<Post | null> {
    return await this.manager.save(post);
  }

  async eliminate(post: Post): Promise<void> {
    await this.remove(post);
  }
}

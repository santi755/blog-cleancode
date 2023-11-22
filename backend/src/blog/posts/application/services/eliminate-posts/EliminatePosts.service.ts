import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostsRepository } from 'src/blog/posts/domain/interfaces/Posts.repository.interface';
import Posts from 'src/blog/posts/domain/entities/Posts.entity';

@Injectable()
export class EliminatePostsService {
  postsRepository: PostsRepository;

  constructor(@InjectRepository(Posts) postsRepository: PostsRepository) {
    this.postsRepository = postsRepository;
  }

  async eliminate(id: string): Promise<void> {
    try {
      const post = await this.postsRepository.search(PostsId.of(id));
      if (!post) return;

      return this.postsRepository.eliminate(post);
    } catch (error) {
      return error;
    }
  }
}

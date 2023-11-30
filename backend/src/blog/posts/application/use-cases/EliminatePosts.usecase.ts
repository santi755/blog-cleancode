import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostsRepository } from 'src/blog/posts/domain/interfaces/Posts.repository.interface';
import Post from 'src/blog/posts/domain/entities/Post.entity';

@Injectable()
export default class EliminatePosts {
  postsRepository: PostsRepository;

  constructor(@InjectRepository(Post) postsRepository: PostsRepository) {
    this.postsRepository = postsRepository;
  }

  async execute(id: string): Promise<void> {
    const post = await this.postsRepository.search(PostsId.of(id));
    if (!post) return;

    return await this.postsRepository.eliminate(post);
  }
}

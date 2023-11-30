import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Post from 'src/blog/posts/domain/entities/Post.entity';
import { PostsRepository } from 'src/blog/posts/domain/interfaces/Posts.repository.interface';
import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';

@Injectable()
export default class SearchPosts {
  postsRepository: PostsRepository;

  constructor(@InjectRepository(Post) postsRepository: PostsRepository) {
    this.postsRepository = postsRepository;
  }

  async execute(id: string): Promise<Post> {
    return await this.postsRepository.search(PostsId.of(id));
  }
}

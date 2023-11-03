import { Injectable } from '@nestjs/common';
import { PostsRepository } from 'src/blog/domain/interfaces/repositories/posts.repository.interface';
import { Posts } from 'src/blog/domain/entities/posts/posts.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostsService {
  postsRepository: PostsRepository;

  constructor(
    /*private readonly postRepository: PostRepository*/
    @InjectRepository(Posts) postsRepository: PostsRepository,
  ) {
    this.postsRepository = postsRepository;
  }

  //async search(id: string): Promise<Post> {
  search(id: string): Promise<Posts> {
    const post = this.postsRepository.search(id);
    return post;
  }
}

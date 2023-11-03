import { Injectable } from '@nestjs/common';
import { PostRepository } from 'src/blog/domain/interfaces/repositories/post.repository.interface';
import { Post } from 'src/blog/domain/entities/post/post.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostsService {
  postRepository: PostRepository;

  constructor(
    /*private readonly postRepository: PostRepository*/
    @InjectRepository(Post) postRepository: PostRepository,
  ) {
    this.postRepository = postRepository;
  }

  //async search(id: string): Promise<Post> {
  search(id: string): Promise<Post> {
    const post = this.postRepository.search(id);
    return post;
  }
}

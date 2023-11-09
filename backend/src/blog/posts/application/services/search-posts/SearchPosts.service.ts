import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from 'src/blog/posts/domain/entities/Posts.entity';
import { PostsRepository } from 'src/blog/posts/domain/interfaces/Posts.repository.interface';

@Injectable()
export class SearchPostsService {
  postsRepository: PostsRepository;

  constructor(@InjectRepository(Posts) postsRepository: PostsRepository) {
    this.postsRepository = postsRepository;
  }

  search(id: string): Promise<Posts> {
    return this.postsRepository.search(id);
  }
}

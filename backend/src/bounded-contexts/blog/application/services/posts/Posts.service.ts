import { Injectable } from '@nestjs/common';
import { PostsRepository } from 'src/bounded-contexts/blog/domain/interfaces/repositories/posts.repository.interface';
import { Posts } from 'src/bounded-contexts/blog/domain/entities/posts/posts.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostsService {
  postsRepository: PostsRepository;

  constructor(@InjectRepository(Posts) postsRepository: PostsRepository) {
    this.postsRepository = postsRepository;
  }
}

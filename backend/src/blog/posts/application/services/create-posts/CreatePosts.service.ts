import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostsDto } from 'src/blog/posts/domain/dtos/createPosts.dto';
import { Posts } from 'src/blog/posts/domain/entities/posts.entity';
import { PostsRepository } from 'src/blog/posts/domain/interfaces/posts.repository.interface';

@Injectable()
export class CreatePostsService {
  postsRepository: PostsRepository;

  constructor(@InjectRepository(Posts) postsRepository: PostsRepository) {
    this.postsRepository = postsRepository;
  }

  create(createPostsDto: CreatePostsDto): Promise<Posts> {
    try {
      return this.postsRepository.add(createPostsDto);
    } catch (error) {
      throw new Error(error);
    }
  }
}

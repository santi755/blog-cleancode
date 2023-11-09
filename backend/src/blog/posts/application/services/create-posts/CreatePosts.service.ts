import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostsDto } from 'src/blog/posts/domain/dtos/CreatePosts.dto';
import { Posts } from 'src/blog/posts/domain/entities/Posts.entity';
import { PostsRepository } from 'src/blog/posts/domain/interfaces/Posts.repository.interface';

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

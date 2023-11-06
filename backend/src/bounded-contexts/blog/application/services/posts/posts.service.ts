import { Injectable } from '@nestjs/common';
import { PostsRepository } from 'src/bounded-contexts/blog/domain/interfaces/repositories/posts.repository.interface';
import { Posts } from 'src/bounded-contexts/blog/domain/entities/posts/posts.entity';
import { CreatePostsDto } from 'src/bounded-contexts/blog/domain/dtos/posts/createPosts.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostsService {
  postsRepository: PostsRepository;

  constructor(@InjectRepository(Posts) postsRepository: PostsRepository) {
    this.postsRepository = postsRepository;
  }

  search(id: string): Promise<Posts> {
    return this.postsRepository.search(id);
  }

  create(createPostsDto: CreatePostsDto): Promise<Posts> {
    try {
      return this.postsRepository.add(createPostsDto);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}

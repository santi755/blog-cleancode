import { Injectable } from '@nestjs/common';
import { CreatePostsDto } from 'src/bounded-contexts/blog/domain/dtos/posts/createPosts.dto';
import { Posts } from 'src/bounded-contexts/blog/domain/entities/posts/posts.entity';
import { PostsRepository } from 'src/bounded-contexts/blog/domain/interfaces/repositories/posts.repository.interface';
import { PostsService } from '../posts.service';

@Injectable()
export class CreatePostsService extends PostsService {
  postsRepository: PostsRepository;

  create(createPostsDto: CreatePostsDto): Promise<Posts> {
    try {
      return this.postsRepository.add(createPostsDto);
    } catch (error) {
      throw new Error(error);
    }
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from 'src/blog/posts/domain/entities/Posts.entity';
import {
  CreatePostsParams,
  PostsRepository,
} from 'src/blog/posts/domain/interfaces/Posts.repository.interface';

@Injectable()
export class CreatePostsService {
  postsRepository: PostsRepository;

  constructor(@InjectRepository(Posts) postsRepository: PostsRepository) {
    this.postsRepository = postsRepository;
  }

  create({ title, content, status }: CreatePostsParams): Promise<Posts> {
    try {
      const post: Posts = new Posts({
        id: null,
        publishedAt: new Date(),
        editedAt: new Date(),
        title: title,
        content: content,
        status: status,
      });

      return this.postsRepository.add(post);
    } catch (error) {
      throw new Error(error);
    }
  }
}

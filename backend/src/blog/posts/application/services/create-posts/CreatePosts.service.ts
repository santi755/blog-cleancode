import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Posts from 'src/blog/posts/domain/entities/Posts.entity';
import { PostsRepository } from 'src/blog/posts/domain/interfaces/Posts.repository.interface';

@Injectable()
export class CreatePostsService {
  postsRepository: PostsRepository;

  constructor(@InjectRepository(Posts) postsRepository: PostsRepository) {
    this.postsRepository = postsRepository;
  }

  create(id, publishedAt, editedAt, title, content, status): Promise<Posts> {
    try {
      const post = Posts.create(
        id,
        publishedAt,
        editedAt,
        title,
        content,
        status,
      );
      return this.postsRepository.add(post);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Error creating post.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

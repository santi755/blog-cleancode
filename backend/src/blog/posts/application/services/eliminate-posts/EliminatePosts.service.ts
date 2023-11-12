import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostsRepository } from 'src/blog/posts/domain/interfaces/Posts.repository.interface';
import { Posts } from 'src/blog/posts/domain/entities/Posts.entity';

@Injectable()
export class EliminatePostsService {
  postsRepository: PostsRepository;

  constructor(@InjectRepository(Posts) postsRepository: PostsRepository) {
    this.postsRepository = postsRepository;
  }

  async eliminate(postId: string): Promise<void> {
    try {
      const post = await this.postsRepository.search(postId);

      if (!post) return null;

      return this.postsRepository.eliminate(post);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Error eliminating post.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

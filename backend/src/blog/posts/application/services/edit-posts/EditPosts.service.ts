import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { EditPostsParams } from 'src/blog/posts/domain/interfaces/Posts.repository.interface';
import Posts from 'src/blog/posts/domain/entities/Posts.entity';
import { PostsRepository } from 'src/blog/posts/domain/interfaces/Posts.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EditPostsService {
  postsRepository: PostsRepository;

  constructor(@InjectRepository(Posts) postsRepository: PostsRepository) {
    this.postsRepository = postsRepository;
  }

  async edit({ id, title, content, status }: EditPostsParams): Promise<Posts> {
    try {
      const post: Posts = await this.postsRepository.search(id);

      if (!post) {
        return null;
      }

      return this.postsRepository.edit(post);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Error editing post.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

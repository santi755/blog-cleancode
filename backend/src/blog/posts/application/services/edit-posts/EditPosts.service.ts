import { Injectable } from '@nestjs/common';
import { EditPostsParams } from 'src/blog/posts/domain/interfaces/Posts.repository.interface';
import { Posts } from 'src/blog/posts/domain/entities/Posts.entity';
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
      try {
        const post: Posts = await this.postsRepository.search(id);
        post.titleValue = title;
        post.contentValue = content;
        post.statusValue = status;
        post.editedAtValue = new Date();

        if (!post) {
          return null;
        }

        return this.postsRepository.edit(post);
      } catch (error) {
        return error;
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}

import { Injectable } from '@nestjs/common';
import { EditPostsDto } from 'src/bounded-contexts/blog/domain/dtos/posts/editPosts.dto';
import { Posts } from 'src/bounded-contexts/blog/domain/entities/posts/posts.entity';
import { PostsRepository } from 'src/bounded-contexts/blog/domain/interfaces/repositories/posts.repository.interface';
import { PostsService } from '../posts.service';

@Injectable()
export class EditPostsService extends PostsService {
  postsRepository: PostsRepository;

  edit(editPostsDto: EditPostsDto): Promise<Posts> {
    try {
      return this.postsRepository.edit(editPostsDto);
    } catch (error) {
      throw new Error(error);
    }
  }
}

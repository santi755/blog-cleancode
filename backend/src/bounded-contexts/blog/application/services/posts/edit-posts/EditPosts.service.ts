import { Injectable } from '@nestjs/common';
import { EditPostsDto } from 'src/bounded-contexts/blog/domain/dtos/posts/editPosts.dto';
import { Posts } from 'src/bounded-contexts/blog/domain/entities/posts/posts.entity';
import { PostsRepository } from 'src/bounded-contexts/blog/domain/interfaces/repositories/posts.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EditPostsService {
  postsRepository: PostsRepository;

  constructor(@InjectRepository(Posts) postsRepository: PostsRepository) {
    this.postsRepository = postsRepository;
  }

  edit(editPostsDto: EditPostsDto): Promise<Posts> {
    try {
      return this.postsRepository.edit(editPostsDto);
    } catch (error) {
      throw new Error(error);
    }
  }
}

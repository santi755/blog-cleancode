import { Injectable } from '@nestjs/common';
import { EditPostsDto } from 'src/blog/posts/domain/dtos/editPosts.dto';
import { Posts } from 'src/blog/posts/domain/entities/posts.entity';
import { PostsRepository } from 'src/blog/posts/domain/interfaces/posts.repository.interface';
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

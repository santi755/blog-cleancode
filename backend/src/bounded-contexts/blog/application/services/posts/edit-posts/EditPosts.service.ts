import { Injectable } from '@nestjs/common';
import { EditPostsDto } from 'src/bounded-contexts/blog/domain/dtos/posts/editPosts.dto';
import { Posts } from 'src/bounded-contexts/blog/domain/entities/posts/posts.entity';
import { PostsService } from '../Posts.service';

@Injectable()
export class EditPostsService extends PostsService {
  edit(editPostsDto: EditPostsDto): Promise<Posts> {
    try {
      return this.postsRepository.edit(editPostsDto);
    } catch (error) {
      throw new Error(error);
    }
  }
}

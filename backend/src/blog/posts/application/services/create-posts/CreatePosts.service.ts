import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Posts from 'src/blog/posts/domain/entities/Posts.entity';
import { PostsRepository } from 'src/blog/posts/domain/interfaces/Posts.repository.interface';
import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';
import PostsStatus from 'src/blog/posts/domain/value-objects/PostsStatus.vo';
import CustomDate from 'src/shared/domain/value-objects/CustomDate.vo';

@Injectable()
export class CreatePostsService {
  postsRepository: PostsRepository;

  constructor(@InjectRepository(Posts) postsRepository: PostsRepository) {
    this.postsRepository = postsRepository;
  }

  create(title, content, status): Promise<Posts> {
    try {
      const post = Posts.create(
        PostsId.generate(),
        CustomDate.generate(),
        CustomDate.generate(),
        title,
        content,
        PostsStatus.of(status),
      );
      return this.postsRepository.add(post);
    } catch (error) {
      return error;
    }
  }
}

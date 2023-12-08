import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Post from 'src/blog/posts/domain/entities/Post.entity';
import { PostsRepository } from 'src/blog/posts/domain/interfaces/Posts.repository.interface';
import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';
import PostsStatus from 'src/blog/posts/domain/value-objects/PostsStatus.vo';
import CustomDate from 'src/shared/domain/value-objects/CustomDate.vo';

@Injectable()
export default class CreatePosts {
  postsRepository: PostsRepository;

  constructor(@InjectRepository(Post) postsRepository: PostsRepository) {
    this.postsRepository = postsRepository;
  }

  async execute(title, content, status): Promise<Post> {
    const post = Post.create(
      PostsId.generate(),
      CustomDate.generate(),
      CustomDate.generate(),
      title,
      content,
      PostsStatus.of(status),
    );

    return await this.postsRepository.add(post);
  }
}

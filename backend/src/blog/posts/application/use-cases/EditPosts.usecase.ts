import { Injectable } from '@nestjs/common';
import Post from 'src/blog/posts/domain/entities/Post.entity';
import { PostsRepository } from 'src/blog/posts/domain/interfaces/Posts.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import PostsStatus from 'src/blog/posts/domain/value-objects/PostsStatus.vo';
import CustomDate from 'src/shared/domain/value-objects/CustomDate.vo';
import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';

@Injectable()
export default class EditPosts {
  postsRepository: PostsRepository;

  constructor(@InjectRepository(Post) postsRepository: PostsRepository) {
    this.postsRepository = postsRepository;
  }

  async execute(id, title, content, status): Promise<Post> {
    const post = Post.create(
      PostsId.of(id),
      CustomDate.generate(),
      CustomDate.generate(),
      title,
      content,
      PostsStatus.of(status),
    );

    return await this.postsRepository.edit(post);
  }
}

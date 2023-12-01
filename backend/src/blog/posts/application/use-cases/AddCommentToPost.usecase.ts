import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';
import Post from 'src/blog/posts/domain/entities/Post.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostsRepository } from 'src/blog/posts/domain/interfaces/Posts.repository.interface';
import Comment from 'src/blog/comments/domain/entities/Comment.entity';
import CommentsId from 'src/blog/comments/domain/value-objects/CommentsId.vo';
import CustomDate from 'src/shared/domain/value-objects/CustomDate.vo';

@Injectable()
export default class AddCommentToPost {
  postsRepository: PostsRepository;

  constructor(@InjectRepository(Post) postsRepository: PostsRepository) {
    this.postsRepository = postsRepository;
  }

  async execute(postId, author, content): Promise<Comment> {
    const post = await this.postsRepository.search(PostsId.of(postId));
    const comment = Comment.create(
      CommentsId.generate(),
      PostsId.of(postId),
      author,
      content,
      CustomDate.generate(),
    );
    post.addComment(comment);
    console.log({ post });
    await this.postsRepository.edit(post);
    return comment;
  }
}

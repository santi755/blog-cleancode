import PostsId from 'src/blog/posts/domain/value-objects/PostsId.vo';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentsRepository } from 'src/blog/comments/domain/interfaces/Comments.repository.interface';
import Comment from 'src/blog/comments/domain/entities/Comment.entity';
import CommentsId from 'src/blog/comments/domain/value-objects/CommentsId.vo';
import CustomDate from 'src/shared/domain/value-objects/CustomDate.vo';
import { PostsRepository } from 'src/blog/posts/domain/interfaces/Posts.repository.interface';
import Post from 'src/blog/posts/domain/entities/Post.entity';

@Injectable()
export default class AddCommentToPost {
  commentsRepository: CommentsRepository;
  postsRepository: PostsRepository;

  constructor(
    @InjectRepository(Comment) commentsRepository: CommentsRepository,
    @InjectRepository(Post) postsRepository: PostsRepository,
  ) {
    this.commentsRepository = commentsRepository;
    this.postsRepository = postsRepository;
  }

  async execute(postId, author, content): Promise<Comment> {
    const post = await this.postsRepository.search(PostsId.of(postId));

    if (!post) throw new Error('Post not found');

    const comment = Comment.create(
      CommentsId.generate(),
      post.id,
      author,
      content,
      CustomDate.generate(),
    );
    await this.commentsRepository.add(comment);
    return comment;
  }
}

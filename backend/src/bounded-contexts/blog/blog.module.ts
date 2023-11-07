import { Module } from '@nestjs/common';
import { PostsController } from './presentation/controllers/posts/posts.controller';
import { PostsService } from './application/services/posts/posts.service';
import { TypeOrmPostsRepository } from './infrastructure/repositories/posts/typeOrmPosts.repository';
import { TypeOrmCommentsRepository } from './infrastructure/repositories/comments/typeOrmComments.repository';

@Module({
  providers: [
    {
      provide: 'PostsRepository',
      useClass: TypeOrmPostsRepository,
    },
    {
      provide: 'CommentsRepository',
      useClass: TypeOrmCommentsRepository,
    },
    PostsService,
  ],
  controllers: [PostsController],
})
export class BlogModule {}

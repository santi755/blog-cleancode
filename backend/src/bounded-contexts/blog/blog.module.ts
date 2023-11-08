import { Module } from '@nestjs/common';
import { PostsController } from './presentation/controllers/posts/posts.controller';
import { PostsService } from './application/services/posts/posts.service';
import { TypeOrmPostsRepository } from './infrastructure/repositories/posts/typeOrmPosts.repository';
import { TypeOrmCommentsRepository } from './infrastructure/repositories/comments/typeOrmComments.repository';
import { CreatePostsService } from './application/services/posts/create-posts/CreatePosts.service';
import { EditPostsService } from './application/services/posts/edit-posts/EditPosts.service';
import { SearchPostsService } from './application/services/posts/search-posts/SearchPosts.service';
import { EliminatePostsService } from './application/services/posts/eliminate-posts/EliminatePosts.service';

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
    CreatePostsService,
    EditPostsService,
    SearchPostsService,
    EliminatePostsService,
  ],
  controllers: [PostsController],
})
export class BlogModule {}

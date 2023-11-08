import { Module } from '@nestjs/common';
import { PostsController } from './presentation/controllers/posts/posts.controller';
import { TypeOrmPostsRepository } from './infrastructure/repositories/posts/typeOrmPosts.repository';
import { TypeOrmCommentsRepository } from './infrastructure/repositories/comments/typeOrmComments.repository';
import { CreatePostsService } from './application/services/posts/create-posts/CreatePosts.service';
import { EditPostsService } from './application/services/posts/edit-posts/EditPosts.service';
import { SearchPostsService } from './application/services/posts/search-posts/SearchPosts.service';
import { EliminatePostsService } from './application/services/posts/eliminate-posts/EliminatePosts.service';
import { CommentsController } from './presentation/controllers/comments/comments.controller';
import { SearchCommentsService } from './application/services/comments/search-comments/SearchComments.service';
import { CreateCommentsService } from './application/services/comments/create-comments/CreateComments.service';

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
    CreatePostsService,
    EditPostsService,
    SearchPostsService,
    EliminatePostsService,
    SearchCommentsService,
    CreateCommentsService,
  ],
  controllers: [PostsController, CommentsController],
})
export class BlogModule {}

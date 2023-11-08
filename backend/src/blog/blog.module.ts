import { Module } from '@nestjs/common';
import { PostsController } from './posts/presentation/posts.controller';
import { TypeOrmPostsRepository } from './posts/infrastructure/repositories/typeOrmPosts.repository';
import { TypeOrmCommentsRepository } from './comments/infrastructure/repositories/typeOrmComments.repository';
import { CreatePostsService } from './posts/application/services/create-posts/CreatePosts.service';
import { EditPostsService } from './posts/application/services/edit-posts/EditPosts.service';
import { SearchPostsService } from './posts/application/services/search-posts/SearchPosts.service';
import { EliminatePostsService } from './posts/application/services/eliminate-posts/EliminatePosts.service';
import { CommentsController } from './comments/presentation/comments.controller';
import { SearchCommentsService } from './comments/application/services/search-comments/SearchComments.service';
import { CreateCommentsService } from './comments/application/services/create-comments/CreateComments.service';

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
